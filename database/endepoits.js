const conecatarBD = require('./script');
const dogs = require('./cachorros');
const cats = require('./gatos');
const user = require('./pessoas');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(dogs);
    const prucurarID = BD.get(dogs.id);
    const dogs = prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(cats);
    const prucurarID = BD.get(cats.id);
    const cats = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(user);
    const prucurarID = BD.get(user.id);
    const user = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};
