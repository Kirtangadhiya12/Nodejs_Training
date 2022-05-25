const { v4 }=require("uuid")
const AWS = require("aws-sdk")


module.exports.updateTodo = async (event) => {

const dynamodb= new AWS.DynamoDB.DocumentClient()

 const {completed}= JSON.parse(event.body);
 const {userId} = event.pathParameters;
 

 await dynamodb.update({
   TableName:"TodoTable",
   Key:{ userId},
   UpdateExpression: 'set completed = :completed',
   ExpressionAttributeValues : {':completed': completed},
   ReturnValues : "ALL_NEW"
 }).promise()
 

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: "Todo Updated"
    }),
  };
};



  

