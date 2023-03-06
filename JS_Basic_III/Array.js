// let  num=[1,2,3,4,5,6,7,8];
// console.log(num);

// // Array methods
// num.push(9);
// console.log(num);

// num.unshift(8);
// console.log(num);

// num.splice(2,0,'a','b','c','d');
// console.log(num);

// num.includes('a');
//  console.log(num.includes('a'))

//  if(num.indexOf(2)!=-1){
//     console.log("present ")

//  } 
 
//  let numbers=[2,34,1,45,23,64,9];
//  // Searching in Array
//  console.log(numbers.indexOf(4)); // if not present return -1




// //  Searching on References
// // Array of objects
// let courses=[
//     {no:1 ,naam:'Gyan'},
//     {no:2, naam:'Prakash'}

// ];
// console.log(courses)


// console.log(courses.indexOf({no:1,naam:'Gyan'})); // return -1 because comparing with value but here is refrence(addressing) is mandaded.

// // Callback function
// // let check= courses.find(function(courses){
// //     return courses.no==1;   // return object
// // })

// // using arrow function for shorthand
// // let check = courses.find( courses =>
// //     {courses.naam=='Gyan';
// // } )
// let check = courses.find(courses => courses.naam=='Gyan')


// let check1= courses.find(function(courses){
//     return courses.naam=='Hello'; // return undefined
// })

// let check2= courses.find(function(courses){
//     return courses.naam==='Ram'; // return undefined
// })


// console.log(check)  // return object
// console.log(check1) // return  undefined
// console.log(check2) // 



// let n= [
//     {id:1},
//     {id:4},
//     {id:5},
//     {id:6},
//     {id:12},
//     {id:13}
// ];

// let search = n.find(n=> n%2 != 0);
// console.log(search)


// // Removing elements in Array

// let number1=[2,4,5,6,7,7,8,9,10];

// // to remove from end
// number1.pop();
// console.log(number1);

// // to remove start element
// number1.shift();
// console.log(number1)

// // removing index elements
// number1.splice(3,2);
// console.log(number1)


// // Emptying the Array

// let number=[1,2,3,4,5];
// let num2=number
// // number=[];  // empty kr diya  1st way
// // console.log(num2); // isme to store abhi bhi hai so we will use length=0



// // number.length=0; 2nd way

// number.splice(0,number.length)  // 3rd way

// console.log(number)
// console.log(num2)



// // Combining and slicing

// let first=[1,2,3];
// let second=[4,5,6];

// let combined= first.concat(second)

// console.log(combined)


// let sliced= combined.slice(2,3);
// // let sliced= combined.slice(2); 
// // let sliced= combined.slice(); create a copy

// console.log(sliced)


// //  Spread operator

// let first=[1,2,3];
// let second=[4,5,6];

// let combined =[...first,'a', ...second,'b'];
// console.log(combined)


// let another =[...combined]


// Iterating an Array

// let array=[10,20, 30,40,50];

// forof loop

// for(let value  of array){
//     console.log(value);
// }

// foreach loop

// array.forEach(function(number){
//     console.log(number);
// })

// using notation for foreach loop if condition satified making in single line


// array.forEach(number=>(console.log(number)));


// Joining Array

// let array=[10,20, 30,40,50];

// let joined= array.join(',');
// console.log(joined)


// spliting array

// let message ='this is my first message';
// let parts= message.split(' ');
// console.log(parts);
// let joined =parts.join(' ');
// console.log(joined);

// sorting 

// let number=[10,5,4,9];  // sort isliye nhi hua kyoki string me convert kr rha hai

// parseInt(number.sort());
// // number.sort();
// console.log(number)


// filtering:

// let number=[10,5,4,9,-1,-4];

// let filtered= number.filter(number =>{
//     return number<0;
// })

// console.log(filtered);


// mapping in Array


let array=[1,2,3,4,5];

//  let mapped= array.map(function(value){
//     return 'studentNO_'+value;
// })

// let mapped =array.map(value=>{
//     return 'student'+value;
// })

// console.log(mapped);


// Mapping with objects:


let number=[1,2,-9,-11];

let filtered=number.filter(value=> value>=0); 

// let items=filtered.map(num=>{
    
//     return {value:num};
// })

// let items=filtered.map(number => {
//     return {value:number}
// }
//    );
let items=filtered.map(number => ({value:number}));

console.log(items);

// chaining
// let items=number
//             .filter(value => value>=0)
//             .map(num=> {value:num});

// console.log(items);











 
