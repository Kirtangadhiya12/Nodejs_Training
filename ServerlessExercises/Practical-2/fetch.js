
const AWS = require("aws-sdk")

module.exports.fetchTodo = async (event) => {

const dynamodb= new AWS.DynamoDB.DocumentClient();
const {userId} = event.pathParameters;

 let todo;
 
try{
    const result = await dynamodb.get({
        TableName:"TodoTable",
        Key: { userId }
    }).promise() 
todo = result.Item;

}catch(error){
console.log(error)
}

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};



  

