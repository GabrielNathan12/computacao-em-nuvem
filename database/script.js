
const {MySQL} = require('mysql');

const conecatarBD = async()=> {
    const cliente = new MySQL(process.env.MYSQL_URL,{ useNewUrlParser: true });
    
    try{
        return cliente.connect();
    }catch(e){
        console.error("Nao foi possivel se conectar !!" + e);
    }finally{
        await cliente.close();
    }

    module.exports = conecatarBD;
}
