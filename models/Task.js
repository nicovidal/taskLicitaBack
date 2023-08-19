const {Schema,model}=require('mongoose');


const TaskSchema=Schema({

    description:{
        type:String,
        requiere:true
    },
})