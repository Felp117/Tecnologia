app.get('/', (req, res) => {
    res.send('Ola mundo!');
});

app.get('/usuario/insert', async(req, res) => {
    let resposta = await inserirUsuario();
    console.log(resposta);
    res.send(inserirUsuario());
})

app.get('/usuario', async (req, res) => {
    let resposta = await buscarUsuario();
    console.log(resposta);
    res.send(buscarUsuario());
})

app.get('/usuario/atualizar', async(req, res) => {
    let resposta = await atualizarUsuario();
    console.log(resposta);
    res.send(atualizarUsuario());
})

app.get('/pessoa/deletar', async(req, res) => {
    let resposta = await deletarUsuario();
    console.log(resposta);
    res.send(deletarUsuario());
})


