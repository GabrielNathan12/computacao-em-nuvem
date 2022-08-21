const conecatarBD = require('./script');

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('baseDados');
    const prucurar = BD.get('cachorros1');
    const dogs = prucurar.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('baseDados');
    const prucurarID = BD.get('gato1');
    const cats = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD('baseDados');
    const prucurarID = BD.get('pessoa1');
    const user = await prucurarID.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};
