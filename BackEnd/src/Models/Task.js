const db = require("../Config/Db");

const Task = {
  create: (taskData, callback) => {
    const sql = "INSERT INTO tarefas (titulo, usuario_id) VALUES (?, ?)";
    db.query(sql, [taskData.titulo, taskData.usuario_id], callback);
  },

  findByUser: (userId, callback) => {
    const sql = "SELECT * FROM tarefas WHERE usuario_id = ?";
    db.query(sql, [userId], callback);
  }
};

module.exports = Task;
