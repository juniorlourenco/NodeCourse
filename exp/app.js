const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('Hello World');
});

app.get('/admin', (req,res) => {
    res.send('Acessando a Administração');
});

app.get('/admin/:id', (req,res) => {
    res.send('Acessando a Administração com o id:'+req.params.id);
});

app.listen(3000, () => {
    console.log(`Server running: http://localhost:3000`);
});