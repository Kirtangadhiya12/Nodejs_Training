
const express = require('express');
const router = express.Router();


const user = require('../controller/userController')

router.get('/',user.getuser);
router.post('/',user.addUser);
router.put('/:ID',user.updateUser);
router.delete('/:ID',user.deleteUser);


module.exports=router;