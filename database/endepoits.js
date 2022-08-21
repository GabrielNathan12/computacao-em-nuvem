const conecatarBD = require('./script');
require('./cachorros');
require('./pessoas');
require('./gatos');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('cachorros');
    const colecao = BD.colecao('cachorros');
    const dogs = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('gatos');
    const colecao = BD.colecao('gatos');
    const cats = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('pessoas');
    const colecao = BD.colecao('pessoas');
    const user = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};