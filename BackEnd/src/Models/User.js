const db = require("../Config/Db");

const User = {
  create: (userData, callback) => {
    const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    db.query(sql, [userData.nome, userData.email, userData.senha], callback);
  },

  findByEmail: (email, callback) => {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    db.query(sql, [email], callback);
  }
};

module.exports = User;
