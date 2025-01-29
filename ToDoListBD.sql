CREATE DATABASE ToDoList;
USE ToDoList;

-- Table Users -- 
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL, 
    entrou_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table Tarefas -- 
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_iniciou TIMESTAMP NULL,
    data_concluiu TIMESTAMP NULL,
    status ENUM('a fazer', 'em andamento', 'concluido') DEFAULT 'a fazer',
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
