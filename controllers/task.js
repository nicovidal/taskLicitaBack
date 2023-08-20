const { response } = require("express");
const Task = require("../models/Task");

const createTask = async (req, res = response) => {
    
  const task = new Task(req.body);

  try {
    const taskSaved = await task.save();
    res.json({
        ok:true,
        task:taskSaved
    });

  } catch (error) {
    res.json({
      ok: false,
      msg: "Error on server",
    });
  }
};





const getTask=async(req,res=response)=>{

    const tasks=await Task.find()

    res.json({
        ok:true,
        tasks
    })


}


module.exports={createTask,getTask}
