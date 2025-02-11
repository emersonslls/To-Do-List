require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error("Erro de conexão com o banco de dados: ", err.stack);
    return;
  }
  console.log("Conectado ao banco de dados MySQL com sucesso!");
});

module.exports = connection;