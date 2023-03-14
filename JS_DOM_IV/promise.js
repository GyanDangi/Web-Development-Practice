//  Promises in Javascript:

// let meraPromise= new Promise(function(resolve, reject){

//     setTimeout(() => {
//         console.log("I am inside promise")
//     }, 3000);
//     // resolve(2223);
//     reject(new Error('error are there please resolve it'))
    
// })

// console.log("Pahla")

// Promise Methods: then() , catch()
// let meraPromise= new Promise(function(resolve, reject){

//     setTimeout(() => {
//         console.log("I am inside promise")
//     }, 3000);
    // resolve(2223);
    // reject(new Error('Error ayya hai bhaisahab resolve kijiye.'))

// })

// meraPromise.then((value)=> {console.log(value)});
// meraPromise.catch((error)=>{console.log(error)});

//  using then method we can handle both:
// meraPromise.then((value)=> {console.log(value)}, (error)=> {console.log(error)});

// console.log("Pahla")


// dependencies of promises over other promises

// let wadaa1= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("settimout1 started")

//     }, 5000);
//     resolve(true)
// })

// jaise hi wadaa1 complete hota hai hum kuch aur start krna chahte hai

// let output= wadaa1.then(()=>{
//     let wadaa2= new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("settimout2 started")
    
//         }, 3000);
//         resolve("Wadaa2 resloved")
//     })
//     return wadaa2;
// })
// output.then((value)=>{console.log(value)});



// aync and await 

// async function abcd(){
//     return 7;
// }

async function utility(){

    let MumbaiMausam= new Promise(function(reslove, reject){

        setTimeout(() => {
            console.log("mumbai me bahut garmi hai")
        }, 5000);
    });

    let DelhiMausam= new Promise( function (resolve, reject){
        setTimeout(() => {
            console.log("Delhi is cool")
        }, 7000);
    });

    let mM= MumbaiMausam;
    let dM= DelhiMausam;
   
    return [mM, dM];


    
}









