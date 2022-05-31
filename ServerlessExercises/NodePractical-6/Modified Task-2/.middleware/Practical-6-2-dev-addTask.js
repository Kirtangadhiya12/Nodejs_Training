'use strict';
    
const src_controller_task_task_validator = require('../src/controller/task/task.validator');
const src_controller_task_taskController = require('../src/controller/task/taskController');

module.exports.handler = async (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = handler => prev => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(src_controller_task_task_validator.taskvalidation.bind(src_controller_task_task_validator)))
    .then(wrappedHandler(src_controller_task_taskController.addTask.bind(src_controller_task_taskController)));
};