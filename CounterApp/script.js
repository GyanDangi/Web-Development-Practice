const counterVal=document.querySelector('#counter');


const increment= () =>{
    // Getting the value from the UI
    let value=parseInt(counterVal.innerText);

    // Updating the value
    value =value +1;

    // setting the updated value to Ui
    counterVal.innerText=value;
}

const decrement= () =>{
    // Getting the value from the UI
    let value=parseInt(counterVal.innerText);

    // Updating the value
    value =value -1;

    // setting the updated value to Ui
    counterVal.innerText=value;
}