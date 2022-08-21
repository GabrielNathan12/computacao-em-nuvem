require('/pessoas');
require('/cachorros');
require('/gatos');

const {MySQL} = require('mysql');

const conecatarBD = async()=> {
    const cliente = new MySQL({
        host:'localhost',
        user:'root',
        password:'password',
    }, pessoas , cachorros , gatos);
    
    try{
        return cliente.connect();
    }catch(e){
        console.error("Nao foi possivel se conectar !!" + e);
    }finally{
        await cliente.close();
    }

    module.exports = conecatarBD;
}
