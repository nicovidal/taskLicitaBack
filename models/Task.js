const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
  description: {
    type: String,
    requiere: true,
  },
  startDate: {
    type: Date,
    requiere: true,
  },
  endDate: {
    type: Date,
    requiere: true,
  },
});

TaskSchema.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model("Task", TaskSchema);
