const AWS = require("../../DB/db")

module.exports.getUser = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let User

    try {
        const results = await dynamodb.scan({ TableName: "userTables" }).promise()
        User = results.Items;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(User),
    };
};


module.exports.addUser = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()


    const {
        ID,
        fullName,
        emailID,
        designation,
        department,
        technologiesKnown,
        projects

    } = JSON.parse(event.body);

    const User = {
        ID,
        fullName,
        emailID,
        designation,
        department,
        technologiesKnown,
        projects
    }

    try {
        await dynamodb.put({
            TableName: "userTables",
            Item: User
        }).promise()


        return {
            message: "User addded Sucessfully"
        };
    } catch (error) {
        return {
            message: error
        }
    }

};

module.exports.updateUser = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { ID } = event.pathParameters;
    const {
        fullName,
        emailID,
        designation,
        department,
        technologiesKnown,
        projects } = JSON.parse(event.body);



    await dynamodb.update({
        TableName: "userTables",
        Key: { ID: parseInt(ID) },
        UpdateExpression: 'set fullName = :n, emailID = :e, designation = :d, department = :dp,technologiesKnown = :t, projects = :p',
        ExpressionAttributeValues: { ':n': fullName, ':e': emailID, ':d': designation, ':dp': department, ':t': technologiesKnown, ':p': projects, },
        ReturnValues: "ALL_NEW"
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "User Updated"
        }),
    };
};

module.exports.deleteUser = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();


    const { ID } = event.pathParameters;


    await dynamodb.delete({
        TableName: "userTables",
        Key: { ID: parseInt(ID) },
        ReturnValues: 'ALL_OLD',
    }).promise()


    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "User deleted"
        }),
    };
};







