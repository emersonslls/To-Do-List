const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// Registro de usuário
exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 10);

    await User.create({ nome, email, senha: hashedPassword });
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
};

// Login de usuário
exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findByEmail(email);
    if (!user) return res.status(401).json({ error: "Usuário não encontrado!" });

    const isPasswordValid = bcrypt.compareSync(senha, user.senha);
    if (!isPasswordValid) return res.status(401).json({ error: "Senha incorreta!" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login." });
  }
};
