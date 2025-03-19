const express = require('express');
const { pool } = require("pg");
const app = express();
app.use(express.static('public'));

const conexao = new pool({
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "Tecno",
    port: 5432
});

conexao.connect()
.then(() => {
    console.log("Conectado ao PostgreSQL");
    inicializarBanco();
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
    