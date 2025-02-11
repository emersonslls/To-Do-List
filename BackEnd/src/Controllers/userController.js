const User = require("../Models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado." });

    res.json({ id: user.id, nome: user.nome, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar perfil." });
  }
};
