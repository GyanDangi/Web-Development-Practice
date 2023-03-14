// console.log("hello dost kaisa hai")


// //  example of synchronouse code:
// function sync(){
//     console.log("first")

// }
// sync()


// console.log("second")
//  asynchronous code:

setTimeout(() => {
    console.log("third")

}, 2000);
function sync(){
    console.log("first")

}
sync()


console.log("second")
