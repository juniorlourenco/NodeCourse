const fs = require("fs");

const dados = fs.readFile("file.txt", (err, data)=>{
    if(err) throw(err)
})