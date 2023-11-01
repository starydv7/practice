const myPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const randomNumber=Math.floor(Math.random()*10);
        if(randomNumber<15){
            resolve(`Success! Random Number:${randomNumber}`);
        }
        else{
            reject(`Error! Random Number:${randomNumber}`);
        }
    }, 1000);
})
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
