const Joi = require('joi');

const validation = Joi.object({
    ID: Joi.number().required(),
    title: Joi.string().trim(true).required(),
    description: Joi.string().trim(true).required(),
    projectID: Joi.number().required()

})

const taskvalidation = async (event, context) => {
    const {
        ID,
        title,
        description,
        projectID
    } = JSON.parse(event.body);

    const payload = {
        ID,
        title,
        description,
        projectID
    }

    const { error } = validation.validate(payload)
    if (error) {
        context.end()
        return {
            errorMessage: error.message
        }
    }
}

module.exports = { taskvalidation }