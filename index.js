const express = require('express');

const {getDogs , getUser , getCats} = require('./database/endepoits');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/' , (req, res) => {
   res.send(`<h1> Servidor Web em nuvem </h1>
    <h2>
        GCC180 -  Computacao em Nuvem -Ufla <br>  
        Gabriel Nathan Almeida Silva 
    </h2>
       
    <br>
     <br>
      <br>
        <h1>
            End Poinst livres
        </h1>
        
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/dogs'">
            <h3>/dogs<h3>
            
        </button>
        <br>
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/cats'">
            <h3>/cats<h3>
        </button>
        <br>
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/user'">
            <h3>/user<h3>
            
        </button>
        <br>
        `)
    }
  );

app.get('/gatos', async(req , res)=>{
    const cats = await getCats();
    res.send('SELECT * FROM gatos',cats);
});

app.get('/pessoas', async(req , res)=>{
    const user = await getUser();
    res.send('SELECT * FROM pessoas',user);
});

app.get('/cachorros', async(req , res)=>{
    const dogs = await getDogs();
    res.send('SELECT * FROM cachorros',dogs);
});

app.listen(PORT,() => console.log('Escutando na porta ' + PORT));
