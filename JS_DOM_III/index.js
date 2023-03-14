// adding element:
// const t1=performance.now();
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is paragraph no:'+i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("1. this took "+(t2-t1)+" ms")
// // optimising code:

// const t3=performance.now();
// let myDiv= document.createElement('div');

// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is paragraph N0 $"+i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4=performance.now();

// console.log("2.this took "+(t4-t3)+" ms");


// using document fragment

// let fragment =document.createDocumentFragment();

// for(let i=1; i<=100; i++){

//     let newElement=document.createElement('p');
//     newElement.textContent='this is paragraph using fragment:'+i;

//     fragment.appendChild(newElement);

// }

// document.body.appendChild(fragment);  // 1 Reflow 1 Repaint

// Event loop in javascript very important concept

setTimeout(() => {
    console.log('hello everyone');
}, 10000);

setTimeout(() => {
    console.log('hello baccho');
},5000);

setTimeout(() => {
    console.log('hello Ji how the day');

},0);
