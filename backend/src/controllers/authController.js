const prisma = require("../models/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "minhaChaveSecreta";

// Função de Registro de Usuário
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar usuário" });
  }
};

// Função de Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ error: "Senha incorreta" });

    const token = jwt.sign({ id: user.id, username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Login bem-sucedido", token });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
