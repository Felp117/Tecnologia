const express = require('express');
const { Pool } = require("pg");
const { inicializarBanco } = require('./CreateDb');
const app = express();

const conexao = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "Tecno",
    port: 5432
});

conexao.connect()
.then(() => {
    console.log("Conectado ao PostgreSQL");
    inicializarBanco(conexao);
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
    