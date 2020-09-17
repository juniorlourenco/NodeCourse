
const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use('/static',express.static('public'));

app.use(express.json());

app.use((req, res, next) =>{
    console.log('Executando Middleware em nível de aplicação')

    return next();
});

app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.use('/admin', adminRoutes);
app.use('/users', userRoutes);

app.get('*',(req, res, next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema'));
    })
})

app.use((err, req, res, next)=>{
    console.log('Geramos um erro, veja as instruções para corrigir!');
    res.status(500).json({message: err.message});
})

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
})