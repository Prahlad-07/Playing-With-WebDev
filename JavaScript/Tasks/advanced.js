const books = require('./data.json');
const { Heap } = require('heap-js');

// Min Heap (default)
const minHeap = new Heap();

// Max Heap
const maxHeap = new Heap(Heap.maxComparator);

// Custom comparator
const customComparator = (a, b) => a.priority - b.priority;
const customHeap = new Heap(customComparator);

// Initialize with an array
minHeap.init([5, 18, 1]);
minHeap.push(2);

console.log(minHeap.peek()); // Output: 1
console.log(minHeap.pop());  // Output: 1
console.log(minHeap.peek()); // Output: 2

// Task 1: Sort all books by rating (highest first)
const sortedBooks = books.sort((a, b) => b.rating - a.rating);

// console.log(sortedBooks);
