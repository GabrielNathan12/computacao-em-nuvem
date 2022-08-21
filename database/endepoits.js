const conecatarBD = require('./script');
require('./cachorros');
require('./gatos');
require('./pessoas');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(cachorros);
    const dogs = BD.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(gatos);
    const cats = await BD.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(pessoas);
    const user = await BD.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};
