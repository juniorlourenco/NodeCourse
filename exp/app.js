const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('Hello World');
});

app.post('/admin', (req,res) => {
    const body = `Login: ${req.body.login}\n
    Senha: ${req.body.senha}`;
    res.send('Acessando a Administração via POST \n' + body);
});

app.get('/admin/:id', (req,res) => {
    res.send('Acessando a Administração com o id:'+req.params.id);
});

app.listen(3000, () => {
    console.log(`Server running: http://localhost:3000`);
});