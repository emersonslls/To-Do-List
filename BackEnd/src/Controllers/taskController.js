const Task = require("../Models/Task");

exports.createTask = async (req, res) => {
  try {
    const { titulo } = req.body;
    const usuario_id = req.user.id; 

    const novaTarefa = await Task.create({ titulo, usuario_id });
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar tarefa." });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const usuario_id = req.user.id;
    const tarefas = await Task.findByUser(usuario_id);
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.delete(id);
    res.json({ message: "Tarefa excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir tarefa." });
  }
};
