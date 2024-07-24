const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor, introduza o título da tarefa"],
    },
    description: {
      type: String,
      required: [true, "Por favor, introduza a descrição da tarefa"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
