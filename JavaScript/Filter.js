console.log("Learning Filter in javascript");
let arr = [1,3,4,5];
console.log(arr);

let brr = arr.filter((value)=>{
    return value % 2 == 1;
});
console.log(brr );
