function sum(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(x +5000);
        },3000);
    })
}

async function main(){
    try{
        const resultado =  await sum(230)
        console.log(`Resultado com Async/Await: ${resultado}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
    }
}
main();
