function soma(x){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            (null, x +5000);
        },3000);
    })
}

soma(200);