
const express = require('express');
const router = express.Router();


const task = require('../controller/taskController')

router.get('/',task.getTask);
router.post('/',task.addTask);
router.put('/:ID',task.updateTask);
router.delete('/:ID',task.deleteTask);

module.exports=router;