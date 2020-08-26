require('./subdirectory/sub')
console.log('---------------')
console.log(`Nome do arquivo: `,__filename)
console.log(`Nome do diretório: `,__dirname)
console.log(`Parâmetros de execução: `,process.argv)
console.log(`Diretório em que foi invocado`, process.cwd())
console.log(`Sistema Operacional:`, process.env.OS)
console.log(`Nome do usuário no Sistema operacional:`, process.env.USERNAME)
console.log(`Idioma:`, process.env.LANG)
console.log(`Nome do server:`, process.env.COMPUTERNAME)

switch(process.argv[2]){
    
    case '-a' :
        console.log('Execute a rotina principal');
        break;
    case '-i' :
        console.log('Execute instalação');
        break;
    case '-q' :
        console.log('Encerrando a aplicação');
        process.exit() // interrompe imediatamente o código
        break;
    default :
        console.log('Parâmetro inválido');        
}
console.log(`Ambiente do servidor: `,process.platform)