const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota principal personalizada
app.get("/schumacher", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Redireciona qualquer acesso à raiz para /schumacher
app.get("/", (req, res) => {
  res.redirect("/schumacher");
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}/schumacher`);
});