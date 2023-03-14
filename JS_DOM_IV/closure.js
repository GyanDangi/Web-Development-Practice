function init(){
    let name='GyanPrakash';
    function displayName(){
        console.log(name);

    }
    displayName();
}
// init(); 

// hamare knowledge ke hisab se name ka scope function ke bahar khatam ho jata hai matlab ans ko call krne pr name undefiend ana chahiye lekin nhi aisa nhi hota hai because of closure
// let ans=init();
// ans();


function outer(){

    let a=5;
    function inner1(){
        let a=3;
        console.log(a);
        function inner2(){
            let a=7;
            console.log(a);
            function inner3(){
                console.log(a);
            }
            // return inner3();
        }
        return inner2();
    }
     inner1();
}

let ans1=outer();
ans1();
