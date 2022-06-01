const { v4 } = require("uuid")
const AWS = require("./db")


module.exports.updateTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient()

  const { todo } = JSON.parse(event.body);
  const { userId } = event.pathParameters;


  await dynamodb.update({
    TableName: "TodoTable",
    Key: { userId },
    UpdateExpression: 'set todo = :todo',
    ExpressionAttributeValues: { ':todo': todo },
    ReturnValues: "ALL_NEW"
  }).promise()


  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Todo Updated"
    }),
  };
};





