console.log("Learning Filter in javascript");
// let arr = [1,3,4,5];
// // console.log(arr);

// let brr = arr.filter((value)=>{
//     return value % 2 == 1;
// });
// // console.log(brr );


// const nums = [0,1,3,4,5,6,7,8,9];
// // With return
// const temp1 = nums.filter((val) => { return (val & 1); });

// // Without return (implicit)
// const temp2 = nums.filter(val => (val & 1));

// console.log(temp1);
// console.log("Another-->");
// console.log(temp2);




const books = [
  { title: "The Great Gatsby", genre: "Classic", publish: 1925 },
  { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
  { title: "1984", genre: "Dystopian", publish: 1949 },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
  { title: "The Da Vinci Code", genre: "Thriller", publish: 2003 },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
  { title: "Pride and Prejudice", genre: "Romance", publish: 1813 },
  { title: "The Catcher in the Rye", genre: "Classic", publish: 1951 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988 },
  { title: "The Road", genre: "Post-Apocalyptic", publish: 2006 }
];

const newBooks = [];
books.forEach((obj) =>{
    let gen = obj.genre;
    if(gen == "Fiction") newBooks.push(obj);
});
console.log(newBooks);