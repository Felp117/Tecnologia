function inicializarBanco() {
    const querires = [
        `CREATE TABLE IF NOT EXISTS usuario (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS pessoa(
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL
        )`,
        `TRUNCATE TABLE usuario`,
        `TRUNCATE TABLE pessoa`
    ];
    querires.forEach(query => {
        console.log(query);
        try {
            conexao.query(query);
            console.log("Tabelas criadas com sucesso!");
        } catch (error) {
            console.error("Error ao criar tableas: ", error);
        }
    });
}