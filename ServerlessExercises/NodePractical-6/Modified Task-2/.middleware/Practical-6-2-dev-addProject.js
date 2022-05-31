'use strict';
    
const src_controller_project_project_validator = require('../src/controller/project/project.validator');
const src_controller_project_projectController = require('../src/controller/project/projectController');

module.exports.handler = async (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = handler => prev => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(src_controller_project_project_validator.projectvalidation.bind(src_controller_project_project_validator)))
    .then(wrappedHandler(src_controller_project_projectController.addProject.bind(src_controller_project_projectController)));
};