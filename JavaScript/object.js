console.log("Learning objects in JavaScript")
// it's kind of map....we store values with key
let obj = {
    name : "Prahlad",
    age : 21,
    percentage : 95.6,
    "isMarried" : false
}
// obj[name] = 

// console.log(obj.isMarried);

// for(const key in obj){
//     console.log(valueOf(key))
// }

for (const key in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // const element = object[key];
        console.log(key,obj[key])
        
    // }
}

