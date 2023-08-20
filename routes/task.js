const {Router}=require("express");
const { getTask, createTask, updateTask, deleteTask } = require("../controllers/task");
const router=Router();


//GetTasks
router.get('/',getTask)

//Create new Task
router.post('/',createTask)

//update Task
router.put('/:id',updateTask)

//delete task
router.delete('/:id',deleteTask)




module.exports=router;