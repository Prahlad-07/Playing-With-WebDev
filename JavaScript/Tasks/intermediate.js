const books = require('./data.json');
//my task is to filter books with older than 50 year with repect to the current year;

let newBooks = books.filter(obj => ((2025 - obj.publish) >= 100));
console.log(newBooks);
