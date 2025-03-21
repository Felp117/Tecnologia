async function buscarPessoa() {
    var url = '/pessoa';
    fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

async function pessoaInsert() {
    var url = '/insert';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

async function pessoaAtualiza() {
    var url = '/atualizar';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

