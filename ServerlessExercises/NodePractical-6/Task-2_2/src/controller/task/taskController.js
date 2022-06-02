const AWS = require("../../DB/db")

module.exports.getTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let Task

    try {
        const results = await dynamodb.scan({ TableName: "taskTable" }).promise()
        Task = results.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(Task),
    };
};

module.exports.addTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()


    const {
        ID,
        title,
        description,
        projectID

    } = JSON.parse(event.body);

    const Task = {
        ID,
        title,
        description,
        projectID
    }

    try {
        await dynamodb.put({
            TableName: "taskTable",
            Item: Task
        }).promise()


        return {
            message: "Task addded Sucessfully"
        };
    } catch (error) {
        return {
            message: error.message
        }
    }

};

module.exports.updateTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { ID } = event.pathParameters;
    const {
        title,
        description, projectID } = JSON.parse(event.body);



    await dynamodb.update({
        TableName: "taskTable",
        Key: { ID: parseInt(ID) },
        UpdateExpression: 'set title = :t,description = :d,projectID = :p',
        ExpressionAttributeValues: { ':t': title, ':d': description, ':p': projectID },
        ReturnValues: "ALL_NEW"
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Task Updated"
        }),
    };
};

module.exports.deleteTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();


    const { ID } = event.pathParameters;


    await dynamodb.delete({
        TableName: "taskTable",
        Key: { ID: parseInt(ID) },
        ReturnValues: 'ALL_OLD',
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Task deleted"
        }),
    };
};





