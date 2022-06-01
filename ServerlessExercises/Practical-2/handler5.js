const { v4 }=require("uuid")
const AWS = require("aws-sdk")


module.exports.deleteTodo = async (event) => {

const dynamodb= new AWS.DynamoDB.DocumentClient()

 
 const {userId} = event.pathParameters;
 

 await dynamodb.delete({
   TableName:"TodoTable",
   Key:{ userId},
   ReturnValues: 'ALL_OLD',
 }).promise()
 

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: "Todo deleted"
    }),
  };
};



  

