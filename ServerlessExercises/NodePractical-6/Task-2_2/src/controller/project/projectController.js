const AWS = require("../../DB/db")

module.exports.getProject = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let Project

    try {
        const results = await dynamodb.scan({ TableName: "projectTable" }).promise()
        Project = results.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(Project),
    };
};

module.exports.addProject = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()


    const {
        ID,
        title,
        description

    } = JSON.parse(event.body);

    const Project = {
        ID,
        title,
        description
    }

    try {
        await dynamodb.put({
            TableName: "projectTable",
            Item: Project
        }).promise()


        return {
            message: "Project addded Sucessfully"
        };
    } catch (error) {
        return {
            message: error.message
        }
    }

};

module.exports.updateProject = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { ID } = event.pathParameters;
    const {
        title,
        description } = JSON.parse(event.body);



    await dynamodb.update({
        TableName: "projectTable",
        Key: { ID: parseInt(ID) },
        UpdateExpression: 'set title = :t,description = :d',
        ExpressionAttributeValues: { ':t': title, ':d': description, },
        ReturnValues: "ALL_NEW"
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Project Updated"
        }),
    };
};

module.exports.deleteProject = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();


    const { ID } = event.pathParameters;


    await dynamodb.delete({
        TableName: "projectTable",
        Key: { ID: parseInt(ID) },
        ReturnValues: 'ALL_OLD',
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Project deleted"
        }),
    };
};





