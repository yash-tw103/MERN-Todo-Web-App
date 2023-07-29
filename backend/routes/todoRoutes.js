const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers');

router.get('/' , todoController.getdata);
router.post('/' , todoController.createTodo);
router.post('/delete' , todoController.deleteTask);
router.post('/update'  , todoController.updatetask);

module.exports = router;