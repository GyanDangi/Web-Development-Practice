// The default action

// let links=document.querySelectorAll('a');
// let thirdLink=links[2];
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     alert("Nhi betta tum nhi khol sakte hum ne block kr diya hai")
// })


// Creating new element using js
let myDiv= document.createElement('div');

// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is paragraph'+i;

//     newElement.addEventListener('click',function(event){
//         console.log('I Have clicked on Paragraph');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// thoda optimize kr rhhe hai
// let paraStatus=function(event){
//     console.log('I Have clicked on Paragraph');
// };
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is paragraph'+i;

//     newElement.addEventListener('click',paraStatus());
//     myDiv.appendChild(newElement);
// }

// thoda aur optimize

document.body.appendChild(myDiv);
function paraStatus(event){
  console.log("para"+event.target.textContent);
}
myDiv.addEventListener('click',paraStatus);
for(let i=1; i<=100; i++){
    let newElement=document.createElement('p');
    newElement.textContent='this is paragraph'+i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
