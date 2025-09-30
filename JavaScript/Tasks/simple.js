const books = require('./data.json');
//printing all the books details-->
// console.log(books);
//priting the books authers-->
const authers = books.map(book => book.author)

console.log(authers);