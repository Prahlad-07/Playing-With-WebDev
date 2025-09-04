console.log("Learning setTimeOut in javascript--:")

/*
print number from one to n with the time delay or 1 second;

*/




// function h1(){
//     console.log("printing h1");
// }

// function h2(){
//     console.log("printing h2");
// }



// // function setTimeOut(){
//     setTimeout(h1, 2*1000);
//     setTimeout(h2, 3*1000);
// // }


function printOneToN(n){
    for(let i = 1; i <= n; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
        // console.log(i);
    }
}

printOneToN(10);


