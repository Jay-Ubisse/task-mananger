const asyncHandler = require("express-async-handler");

const getAllTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Obter todas as tarefas" });
});

const getTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Obter tarefa ${req.params.id}`,
  });
});

const createTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Tarefa criada com sucesso!",
    data: req.body,
  });
});

const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Actualizar tarefa ${req.params.id}` });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Eliminar uma tarefa ${req.params.id}` });
});

module.exports = { getAllTasks, getTask, deleteTask, createTask, updateTask };
