//forma assíncrona - não bloqueante

const fs = require('fs');

fs.readFile('text.txt', (err, data)=>{
    if (err) throw err;

    //console.log(data.toString());
})

//forma síncrona - bloqueante

const text = fs.readFileSync ('text.txt');
console.log (`Texto:  ${text}`);