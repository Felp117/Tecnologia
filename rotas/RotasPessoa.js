app.get('/', (req, res) => {
    res.send('Ola mundo!');
});

app.get('/pessoa/insert', async(req, res) => {
    let resposta = await inserirPessoa();
    console.log(resposta);
    res.send(inserirPessoa());
})

app.get('/pessoa', async (req, res) => {
    let resposta = await buscarPessoa();
    console.log(resposta);
    res.send(buscarPessoa());
})

app.get('/pessoa/atualizar', async(req, res) => {
    let resposta = await atualizarPessoa();
    console.log(resposta);
    res.send(atualizarPessoa());
})

app.get('/pessoa/deletar', async(req, res) => {
    let resposta = await deletarPessoa();
    console.log(resposta);
    res.send(deletarPessoa());
})


