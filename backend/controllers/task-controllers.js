const asyncHandler = require("express-async-handler");
const Task = require("../models/task-model");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({ message: "Todas Tarefas", data: tasks });
});

const getTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Obter tarefa ${req.params.id}`,
  });
});

const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json({
    message: "Tarefa criada com sucesso!",
    data: task,
  });
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Tarefa não encontrada" });
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(200)
    .json({ message: `Tarefa actualizada com sucesso`, data: updatedTask });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Eliminar uma tarefa ${req.params.id}` });
});

module.exports = { getAllTasks, getTask, deleteTask, createTask, updateTask };
