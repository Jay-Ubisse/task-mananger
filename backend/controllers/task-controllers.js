const getAllTasks = (req, res) => {
  //CÓDIGO PARA IR BUSCAR E PROCESSAR DADOS DA BASE DE DADO
  res.status(200).json({ message: "Obter todas as tarefas" });
};

const getTask = (req, res) => {
  res.status(200).json({
    message: `Obter tarefa ${req.params.id}`,
  });
};

const createTask = (req, res) => {
  res
    .status(200)
    .json({ message: "Tarefa criada com sucesso!", data: req.body });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: `Actualizar tarefa ${req.params.id}` });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Eliminar uma tarefa ${req.params.id}` });
};

module.exports = { getAllTasks, getTask, deleteTask, createTask, updateTask };
