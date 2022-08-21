const conecatarBD = require('./script');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('dataBase');
    const colecao = BD.colecao('cachorros');
    const dogs = colecao.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('dataBase');
    const colecao = BD.colecao('gatos');
    const cats = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('dataBase');
    const colecao = BD.colecao('pessoas');
    const user = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};