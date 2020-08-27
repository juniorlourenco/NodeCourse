const { EventEmitter } = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento()

//subscriber
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//publisher
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')

meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante: ' + dados);
});

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados!');