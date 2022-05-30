
const express = require('express');
const router = express.Router();


const project = require('../project/projectController')

router.get('/',project.getProject);
router.post('/',project.addProject);
router.put('/:ID',project.updateProject);
router.delete('/:ID',project.deleteProject);

module.exports=router;