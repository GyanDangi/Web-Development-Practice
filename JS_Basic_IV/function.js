// run();  yaha bhi chalega because of hoisting

// function call or invoke
run();


//function delecration
function run(){
    console.log('Runnig');
}

// run();  yaha bhi chalega 

// assign function will not support hoisting
// stand();  yaha pr nhi chalega
// function assignments
let stand =function walking(){

    console.log('walking on road');
}

// anonymous function assigments
let stand2 =function (){

    console.log('walking on road');
}

// stand();
// // walking(); will give an error

// let jump= stand;
// jump();


// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// let ans=sum(1,2); // output 3s
// let ans=sum(1); // output NaN (not a number)
// let ans=sum(1); // not a number
// let ans=sum(1,2,4,5,6);   // how to use this value we can use it using arguments

//dynamic function 
function sum(a,b){
    let total=0;
    for(let value of arguments){
        total=total+value;
    }
    return total;
}

// let ans=sum(1,2,4,5,9,10,6,7,8);
// // let ans=sum(1);
// // let ans=sum(1,2,4,5,9,10);
// // let ans=sum(1,2);
// console.log(ans);

// Rest operator:
function sum(nums, value, ...args){
    console.log(args);
}

sum(1,2,3,4,5,6,7);


// Default Arguments

function interest(p, r=6, y=9){
    return p*r*y/100;
}

console.log(interest(1000,undefined,8));

// function to print objects

// let person={
//     fName:'Gyan',
//     LName:'Prakash'
// };


// this is read only function we can 't set
// function fullName(){
//     return `${person.fName} ${person.LName}`;
// }
// console.log(fullName());

// Getter :access functions properties
// Setter :change or manipulate functions properties


let person={
    fName:'Gyan',
    LName:'Prakash',

    get fullName(){
        return `${this.fName} ${this.LName}`
    },
 
    set fullName(value){
        let parts= value.split(' ');
        this.fName=parts[0];
        this.LName=parts[1];
    }
};
person.fullName='Rahul Kumar'   
console.log(person.fullName);


// error handling

try{
    person.fullName=1;
}
catch(e){
    console.log('You have not string in full name');
}

// Scope:

// let a=9;
// function walking(){
//     let a=10;
//     console.log(a);
// }
// walking();

// function ScopeofLet(){
//     let b=10;
// }
// console.log(b); // this is out of scope error

// function scopeOfVar(){
//     var b=0;
// }

// console.log(b); // var ka bhi scope function tak hi hai..

// if(true){
//     var c=10;
// }
// console.log(c);


// reducing Array using reduce function


let arr=[1,2,3,4];

// let totalsum=0;
// for(let value of arr){
//     totalsum += value;
// }
// console.log(totalsum);

// reduce function implementation

let  totalsum1= arr.reduce((storingvalue,currentvalue)=>storingvalue+currentvalue);
console.log(totalsum1);

