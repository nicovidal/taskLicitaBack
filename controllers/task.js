const { response } = require("express");
const Task = require("../models/Task");

const createTask = async (req, res = response) => {
  const task = new Task(req.body);

  try {
    const taskSaved = await task.save();
    res.json({
      ok: true,
      task: taskSaved,
    });
  } catch (error) {
    res.json({
      ok: false,
      msg: "Error on server",
    });
  }
};

const getTask = async (req, res = response) => {
  const tasks = await Task.find();

  res.json({
    ok: true,
    tasks,
  });
};

const updateTask = async (req, res = response) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: "Task not found",
      });
    }

    const newTask = {
      ...req.body,
    };

    const taskUpdating = await Task.findByIdAndUpdate(taskId, newTask, {
      new: true,
    });

    res.json({
      ok: true,
      task: taskUpdating,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error server",
    });
  }
};

const deleteTask = async (req, res = response) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: "Task not found",
      });
    }

    await Task.findByIdAndDelete(taskId);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error server",
    });
  }
};

const deleteMultipleTasks = async (req, res = response) => {
  const taskIds = req.body;

  try {
    const tasks = await Task.find({ _id: { $in: taskIds } });
    if (tasks.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: "Task not found",
      });
    }

    await Task.deleteMany({ _id: { $in: taskIds } });

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Server error",
    });
  }
};

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteMultipleTasks,
};
