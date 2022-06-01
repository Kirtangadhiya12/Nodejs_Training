const Joi = require('joi');

const validation = Joi.object({
    ID: Joi.number().required(),
    fullName: Joi.string().trim(true).required(),
    emailID: Joi.string().email().required(),
    designation: Joi.string().trim(true).required(),
    department: Joi.string().trim(true).required(),
    technologiesKnown: Joi.array().items(Joi.string()).required(),
    projects: Joi.array().items(Joi.number()).required()


})

const uservalidation = async (event, context) => {
    const {
        ID,
        fullName,
        emailID,
        designation,
        department,
        technologiesKnown,
        projects
    } = JSON.parse(event.body);

    const payload = {
        ID,
        fullName,
        emailID,
        designation,
        department,
        technologiesKnown,
        projects
    }

    const { error } = validation.validate(payload)
    if (error) {
        context.end()
        return {
            errorMessage: error.message
        }
    }
}

module.exports = { uservalidation }