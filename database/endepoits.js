const conecatarBD = require('./script');
require('./cachorros');
require('./gatos');
require('./pessoas');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(cachorros);
    const prucurar = BD.get(cachorros.json());
    const dogs = prucurar.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(gatos);
    const prucurarID = BD.get(cachorros.json(id));
    const cats = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(pessoas);
    const prucurarID = BD.get(pessoas.json());
    const user = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};
