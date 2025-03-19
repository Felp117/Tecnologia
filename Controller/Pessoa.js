async function inserirPessoa(nome) {
    try {
        await conexao.query('INSERT INTO pessoa(nome) values ($1)', [nome]);
        console.log(`pessoa ${nome} inserido com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function atualizarPessoa(nome, id) {
    try {
        await conexao.query('UPDATE pessoa SET nome = ? WHERE id = ?', [nome, id])
        console.log(`Pessoa ${nome} com id ${id} alterado com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function deletarPessoa(id) {
    try {
        await conexao.query('DELETE pessoa WHERE id = ?', [id]);
        console.log(`Id ${id} deletado com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function buscarPessoa() {
    const {rows} = await conexao.query('SELECT * FROM pessoa');
    return rows;
}

async function buscaPorId(id) {
    try {
        await conexao.query('SELECT * FROM pessoa where id = ?' [id]);
        console.log(`Busca do id ${id} realizada`);
    } catch (error) {
        console.error(error);
    }
}

