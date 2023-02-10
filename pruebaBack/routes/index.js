var express = require('express');
var router = express.Router();
const {getTask, getTaskById, addTask, updateTask, deleteTask} = require('../controller/tasks.controller')

/* GET home page. */
router.get('/', getTask);

router.get('/:id', getTaskById);

router.post('/', addTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
