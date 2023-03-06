// console.log("Let's begin")


// let rectangle = {
//     length :1,
//     breadth :3,

//     draw: function() {
//         console.log("Drawing Rectangle");

//     }
// };

// // Factory function:
// /// object banta bhi hai aur mil jata hai

// function createRectangle() {

//     return  rectangle ={
//         length:Number,
//         breadth:Number,
        
//         draw: function () {
//             console.log("Drawing rectangle");

//         }
//     };
// }
// function createRectangle1(length, breadth) {

//     return  rectangle ={
//         length,
//         breadth,
        
//         draw: function () {
//             console.log("Drawing rectangle");

//         }
//     };
// }

// let obj1= createRectangle();
// obj1.length=5;
// obj1.breadth=4;
// obj1.draw();
// console.log(obj1);

// let obj2=createRectangle1(7,9);
// console.log(obj2);


// // Constructor Function:
// // noatation: Pascal Notation --> Every first Letter of word are Capital: NumberOfStudents
// // constructorFunction -> Properties/methods -> initlize/define
// function Square(){
//     this.length=1;
//     this.breadth=2;
//     this.draw= function() {
//         console.log("Drawing Square")
//     }
// }

// let square1=new Square();
// console.log(square1)

// function Square1(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw= function() {
//         console.log("Drawing Square")
//     }
// }

// let square2=new Square1(45,23);

// // new property adding:
// // this is dynamic nature of object
// square2.color='red';
// console.log(square2)

// // deleting the created propeties:
// delete square2.color;
// delete square2.length;
// console.log(square2);


// // Function are aslo ojects


// // Types in Js

// // Primitive types or value type

// let a=10;
// let b=a;
// a++;
// console.log(a);

// console.log(b);

// let x=10;
// function inc(x){
//     x++;
// }
// inc(x);
// console.log("value of x is:",x);


// // Reference in Js
//  let n={value:10};

//  let m=n;
//  n.value++;
//  console.log(n.value);
//  console.log(m.value);


// //  Delening with function in reference In Js

// let p={value:100};

// function increm(p){

//     p.value++;
// }

// increm(p);
// console.log("value of p is:",p);


let  Rectangle= {

    length:7,
    breadth:4,
};
// //  For in Loop 
// for(let key in Rectangle){
//     // console.log(key);
//     console.log(key, Rectangle[key]);
//     // console.log(key, Rectangle.key);
// }


// For of Loop

for(let key of Object.keys(Rectangle)){

    console.log(key)

}
for(let key of Object.entries(Rectangle)){

    console.log(key)

}

if('color' in Rectangle){
    console.log('Present ')

}
else{
    console.log("Absent")
    
}
if('length' in Rectangle){
    console.log('Present ')

}
else{
    console.log("Absent")

}


