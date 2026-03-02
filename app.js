const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/historia", (req, res) => {
    res.sendFile(path.join(__dirname, "historia.html"));
});

app.get("/piloto/:nome", (req, res) => {
    res.send(`Página do piloto: ${req.params.nome}`);
});

app.get("/api/hamilton", (req, res) => {
    res.json({
        nome: "Lewis Hamilton",
        titulos: 7,
        vitorias: 103,
        equipe: "Ferrari"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});