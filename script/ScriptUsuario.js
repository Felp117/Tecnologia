async function BuscaruUsuario() {
    var url = '/pessoa';
    fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

async function usuarioInsert() {
    var url = '/insert';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

async function usuarioAtualiza() {
    var url = '/atualizar';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}
