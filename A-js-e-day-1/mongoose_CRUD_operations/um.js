const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const myUser=new Schema({
    user_id:Number,
    user_name:String,
    user_email:String
});
module.exports=mongoose.model('user',myUser);