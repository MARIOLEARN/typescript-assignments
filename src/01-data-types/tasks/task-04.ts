/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const book1: Book = {
  isbn: "978-602-291-123-4",
  title: "Giant beast",
  author: "Susilo",
  totalPages: 529,
  category: "Fiction",
  isAvailable: true,
};

const book2: Book = {
  isbn: "978-979-22-4567-8",
  title: "Bumi berguncang",
  author: "Susilo",
  totalPages: 535,
  category: "Historical Fiction",
  isAvailable: false,
};

const book3: Book = {
  isbn: "978-602-03-1234-9",
  title: "dinosaurus",
  author: "Hartono",
  totalPages: 318,
  category: "Self-Development",
  isAvailable: true,
};

console.log("Book 1 :", book1);
console.log("Book 2 :", book2);
console.log("Book 3 :", book3);