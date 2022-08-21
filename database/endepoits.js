const conecatarBD = require('./script');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('cachorros');
    const colecao = BD.colecao('id');
    const dogs = colecao.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('gatos');
    const colecao = BD.colecao('id');
    const cats = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('pessoas');
    const colecao = BD.colecao('id');
    const user = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};