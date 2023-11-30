/*
Filename: ComplexApplication.js
Description: A complex and sophisticated JavaScript application that manages a library system.
Author: AI Assistant
*/

// Define the Library class
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.users = [];
    this.transactions = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  borrowBook(user, book) {
    if (this.books.includes(book) && !book.borrowed && user.canBorrow()) {
      book.borrowed = true;
      const transaction = new Transaction(user, book, new Date());
      this.transactions.push(transaction);
      return true;
    } else {
      return false;
    }
  }

  returnBook(book) {
    if (book.borrowed) {
      book.borrowed = false;
      const transaction = this.transactions.find(trans => trans.book === book && !trans.returnDate);
      if (transaction) {
        transaction.returnDate = new Date();
      }
    }
  }

  viewAvailableBooks() {
    return this.books.filter(book => !book.borrowed);
  }

  viewBorrowedBooks() {
    return this.books.filter(book => book.borrowed);
  }

  viewUsers() {
    return this.users;
  }

  viewTransactions() {
    return this.transactions;
  }
}

// Define the Book class
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.borrowed = false;
  }
}

// Define the User class
class User {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  canBorrow() {
    // Add custom conditions for borrowing books (e.g. age restrictions)
    return true;
  }
}

// Define the Transaction class
class Transaction {
  constructor(user, book, borrowDate) {
    this.user = user;
    this.book = book;
    this.borrowDate = borrowDate;
    this.returnDate = null;
  }
}

// Create a library instance
const myLibrary = new Library("Awesome Library", "New York");

// Create books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book("1984", "George Orwell", "Science Fiction");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Create users
const user1 = new User("John Doe", 25, "123 Main St");
const user2 = new User("Jane Smith", 30, "456 Elm St");

// Add users to the library
myLibrary.addUser(user1);
myLibrary.addUser(user2);

// User borrows a book
myLibrary.borrowBook(user1, book1);

// User returns a book
myLibrary.returnBook(book1);

// View available books
const availableBooks = myLibrary.viewAvailableBooks();
console.log("Available Books:");
availableBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// View borrowed books
const borrowedBooks = myLibrary.viewBorrowedBooks();
console.log("Borrowed Books:");
borrowedBooks.forEach(book => {
  console.log(`${book.title} by ${book.author}`);
});

// View all users
const users = myLibrary.viewUsers();
console.log("Users:");
users.forEach(user => {
  console.log(`${user.name}, ${user.age}, ${user.address}`);
});

// View all transactions
const transactions = myLibrary.viewTransactions();
console.log("Transactions:");
transactions.forEach(transaction => {
  console.log(`User: ${transaction.user.name}`);
  console.log(`Book: ${transaction.book.title}`);
  console.log(`Borrow Date: ${transaction.borrowDate}`);
  console.log(`Return Date: ${transaction.returnDate}`);
  console.log("===============================");
});

// Output:
// Available Books:
// The Catcher in the Rye by J.D. Salinger
// To Kill a Mockingbird by Harper Lee
// 1984 by George Orwell
// Borrowed Books:
// Users:
// John Doe, 25, 123 Main St
// Jane Smith, 30, 456 Elm St
// Transactions:
// User: John Doe
// Book: The Catcher in the Rye
// Borrow Date: [current date & time]
// Return Date: [current date & time]
// ===============================
