const {Router}=require("express");
const { getTask, createTask } = require("../controllers/task");
const router=Router();




//GetTasks
router.get('/',getTask)


//Create new Task
router.post('/',createTask)




module.exports=router;