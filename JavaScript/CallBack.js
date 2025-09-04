console.log("Learning callback funtions in js")
/*
it is a function that passes inner a function

*/


function product(a,b,c){
    return a*b*c;
}

function callback(val, x){
    return val - x;
}
console.log(callback(product(4,3,2),10));
// console.log(product(5,6,4));