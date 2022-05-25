const Responses= require('./API_Responses')

exports.handler = async event =>{
    console.log('event', event)

    if(!(event.pathParameters ||event.pathParameters.ID) ){
        // failed without ID
        return Responses._400({message:'missing the ID from path'});
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        //return the data
        return Responses._200(data[ID]);
    }
      //failed as ID not in the data
      return Responses._400({message: 'no ID in data'});
}

const data={
    1234: {name:'kirtan',age:22,job:'developer'},
    7893: {name:'jinay',age:23,job:'fsd'},
    5123: {name:'lav',age:24,job:'datascience'}
};