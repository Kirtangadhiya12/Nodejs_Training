const express=require('express');
const app = express();
const jwt = require('jsonwebtoken');
const PORT=3000;
const createToken = async()=>{
const token=await jwt.sign({_id:"6239b435de3dbb4f324d83e4"},"asmnwndndndudeufheufhfhfuhfufhefuhuhffh");
console.log(token);
const UserVerify=await jwt.verify(token,"asmnwndndndudeufheufhfhfuhfufhefuhuhffh");
console.log(UserVerify);
}
createToken();
app.listen(PORT,()=>{
    console.log(`Now server is running on port no ${PORT}`);
})