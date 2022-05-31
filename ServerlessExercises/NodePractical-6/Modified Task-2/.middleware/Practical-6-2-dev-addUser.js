'use strict';
    
const src_controller_user_user_validator = require('../src/controller/user/user.validator');
const src_controller_user_userController = require('../src/controller/user/userController');

module.exports.handler = async (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = handler => prev => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(src_controller_user_user_validator.uservalidation.bind(src_controller_user_user_validator)))
    .then(wrappedHandler(src_controller_user_userController.addUser.bind(src_controller_user_userController)));
};