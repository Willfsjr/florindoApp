const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "minhaChaveSecreta";

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(403).json({ error: "Acesso negado" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido" });
    req.user = user;
    next();
  });
};
