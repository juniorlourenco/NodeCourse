const readline = require('readline');
const { createSocket } = require('dgram');
const CommandParser = require('./CommandParser');
const Commander = require('./Commander');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889;
const TELLO_HOST = '192.168.10.1';

const getSocket = () => {
    const socket = createSocket('upd4');
    socket.bind(TELLO_CMD_PORT);
    return socket;
}

(async function start(){
    const socket = getSocket();
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT);
    await cmder.sendInitCommand();
    const cmdp = new CommandParser({
        onTakeoff: async () => {await cmder.sendTakeOff()},
        onLand: async () => {await cmder.sendLand()},
        onForward: async () => {await cmder.sendForward()},
        onBack: async () => {await cmder.sendBack()},
        onRight: async () => {await cmder.sendRight()},
        onLeft: async () => {await cmder.sendLeft()},
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.getBattery()}
    });

    console.log ('Iniciando');
    socket.on('message', (msg) => {
        console.log(`DJI tello: ${msg.toString()}`);
    });
    socket.on('error', (err) => {
        console.log(`DJI tello ERROR: ${err.toString()}`);
    });
    socket.on('listening', () => {
        console.log(`Socket is listening! `);
    });

    console.log('Enter a command: ');
    rl.on('line', (line) => {
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log('Bye');
                process.exit(0);
            };
            console.log('Not a valid command. ');
        };
    });
})()