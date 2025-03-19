async function inserirUsuario(nome) {
    try {
        await conexao.query('INSERT INTO usuario(nome) value ($1)', [nome]);
        console.log(`A pessoa ${nome} foi inserido com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function atualizarUsuario(nome, id) {
    try {
        await conexao.query('UPDATE usuario SET nome = ? WHERE id = ?', [nome, id])
        console.log(`Usuario ${nome} com id ${id} alterado com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function deletarUsuario(id) {
    try {
        await conexao.query('DELETE pessoa WHERE id = ?', [id]);
        console.log(`Id ${id} deletado com sucesso`);
    } catch (error) {
        console.error(error);
    }
}

async function buscarUsuario() {
    const {rows} = await conexao.query('SELECT * FROM usuario');
    return rows;
}

async function buscaPorId(id) {
    try {
        await conexao.query('SELECT * FROM usuario where id = ?' [id]);
        console.log(`Busca do id ${id} realizada`);
    } catch (error) {
        console.error(error);
    }
}