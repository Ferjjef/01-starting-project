console.log(add("hello ", "world"));

//Functions as parameters
function sayHi(){
    console.log('Hi');
}
function bye(){
    console.log('Bye');
}
function lol(){
    console.log('lol');
}
sayHi(bye);
sayHi(lol);
sayHi(function(){
    console.log("lolololol");
})
//functions as expressions
// function lolololol(){
// console.log("lolololol");
//}
let iloveJS = function(){
    console.log("I love js");
}
iloveJS();
let expressionAdd = function(x, y){
    return x + y;
}
expressionAdd(1,2);
//Arrow functions
let addArrow = (x,y) =>{
    return x + y;
}
let addArrowshort = (x,y) =>x+y;{
    return x + y;
}
addArrow(1,2);
let squared = x => x+x;


setTimeout(sayHi, 2000);