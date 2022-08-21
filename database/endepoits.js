const conecatarBD = require('./script');
//require('./cachorros');
//require('./pessoas');
//require('./gatos');

const pessoas = [
    {
        id: 331122121,
        nome: "Gabriel",
        idade: "22",
    },
    {
        id: 4411221,
        nome: "Nathan",
        idade: "24",
      },
    {
      id: 99812,
      descricao: "Almeida",
      idade: "58",
    },
  ];

  const gatos = [
    {
      id: 1111123,
      raca: "Persa",
      porte: "pequeno",
    },
    {
      id: 221311,
      raca: "siames",
      porte: "pequeno",
    },
    {
      id: 655311,
      descricao: "ragdoll",
      porte: "pequeno",
    },
  ];

  const cachorros = [
    {
      id: 3321211,
      raca: "Buldoque",
      porte: "pequeno",
    },
    {
      id: 433112,
      raca: "Pastor alemao",
      porte: "grande",
    },
    {
      id: 7382811,
      descricao: "Golden retriever",
      porte: "grande",
      concluido: false,
    },
  ];

const getDog = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(cachorros);
    const colecao = BD.colecao('id');
    const dogs = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return dogs;
}

const getCats = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(gatos);
    const colecao = BD.colecao('id');
    const cats = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return cats;
}

const getUser = async() => {
    const cliente = await conecatarBD();
    const BD = cliente.BD(pessoas);
    const colecao = BD.colecao('id');
    const user = await colecao.find({}).limit(10).toArray();
    await cliente.close();
    return user;
}

module.exports = {getDog , getCats , getUser};