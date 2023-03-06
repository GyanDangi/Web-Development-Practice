
// Cloning using iteration:
let src={a:10,b:12,c:13,d:14,e:15};
let des={};
for(let key in src){
    des[key]=src[key];
}
for(let key in des){
    console.log(des[key]);
}

// Cloning using assign function of javascript
let src1={a:1,b:2,c:3,d:4,e:5,f:6};
let src2={value:987};
let dest1=Object.assign({},src1,src2);

console.log(dest1)

// for(let key in dest1) {
//     console.log(dest1[key]);
// } 


// cloning using spread:
let dest3={...src1};
// for(let key in dest3){
//     console.log(dest3[key]);
// }
console.log(dest3);
