// In javascript String are
// 1-> Primitive
// 2-> Object String

// Primitive String:
let lastName='Dangi';
console.log(lastName);
console.log(typeof(lastName));


// OBject String in Js
let firstName=new String('Gyan');   
console.log(firstName);
console.log( typeof(firstName));


// converting primitive string into object string using dot notation
// lastName.charAt(2);
console.log(lastName);
console.log(lastName.charAt(2));
console.log(lastName.includes('Dan'));
console.log(lastName.startsWith('Da'));

console.log(firstName.startsWith('Gy'));

console.log(lastName.indexOf('g'));

console.log(lastName.toLocaleLowerCase());
console.log(lastName.toUpperCase());

// to removing space of string
console.log(lastName.trim())


let message='This is my first message from Gyan';
// let words=message.split(' ');
// console.log(words);
message.replace('first', 'second');
console.log(message);
console.log(message.replace('first', 2+'nd'));
