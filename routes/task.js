const {Router}=require("express");
const { getTask, createTask, updateTask, deleteTask } = require("../controllers/task");
const { validate } = require("../middlewares/validate");
const {check}=require('express-validator')
const router=Router();
const { isDate } = require("../helpers/isDate");


//GetTasks
router.get('/',getTask)

//Create new Task
router.post('/',
[
    check('description','la descripcion es obligatoria').not().isEmpty(),
    check('startDate','Fecha de inicio es obligatoria').custom(isDate),
    check('endDate','Fecha de finalizacion es obligatoria').custom(isDate),
    validate
]
,createTask)

//update Task
router.put('/:id',updateTask)

//delete task
router.delete('/:id',deleteTask)




module.exports=router;