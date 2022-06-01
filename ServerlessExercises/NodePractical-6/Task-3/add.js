const { v4 } = require("uuid")
const AWS = require("./db")

module.exports.addTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient()

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const userId = v4();

  console.log("This is an id", userId)

  const newTodo = {
    userId,
    todo,
    createdAt,
    completed: false
  }
  await dynamodb.put({
    TableName: "TodoTable",
    Item: newTodo
  }).promise()


  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};





