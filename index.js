const express = require('express');

const {getDogs , getUser , getCats} = require('./database/endepoits');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/' , (req, res) => {
   res.send(`<h1> Servidor Web em nuvem </h1>
    <h2>
       GCC180 -  Computacao em Nuvem -Ufla    
    </h2>
        Gabriel Nathan Almeida Silva
    <br>
     <br>
      <br>
        <h1>
            End Poinst disponiveis no momento
        </h1>
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/dogs'">
            <h3>/dogs<h3>
         </button>
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/cats'">
            <h3>/cats<h3></button>
        <button onclick="window.location.href = 'https://app-nuvem-test.herokuapp.com/users'">
            <h3>/users<h3>
        </button>
        `)
    }
  );

app.get('/gatos', async(req , res)=>{
    const cats = await getCats();
    res.send(cats);
});

app.get('/pessoas', async(req , res)=>{
    const user = await getUser();
    res.send(user);
});

app.get('/cachorros', async(req , res)=>{
    const dogs = await getDogs();
    res.send(dogs);
});

app.listen(PORT,() => console.log('Escutando na porta ' + PORT));
