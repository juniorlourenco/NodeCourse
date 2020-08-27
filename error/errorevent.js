const { EventEmitter } = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

const validaObjeto = (a) => {
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'));
    } else{
        console.log('Objeto válido');
    }
}

emitter.addListener('error', (error)=>{
    console.log('Evento: '+error.message);
});

let dados = { name: "Hcode", course: "NodeJS"}

validaObjeto(dados);