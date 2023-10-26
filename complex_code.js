/* 
   Filename: complex_code.js
   Description: Complex example code that showcases various advanced JavaScript concepts and techniques.
*/

// Define a class for creating a person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to get the person's name
  getName() {
    return this.name;
  }

  // Define a method to get the person's age
  getAge() {
    return this.age;
  }

  // Define a static method to generate a random person
  static generateRandomPerson() {
    const names = ['John', 'Jane', 'Mark', 'Alice'];
    const ages = [18, 25, 30, 40];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = ages[Math.floor(Math.random() * ages.length)];

    return new Person(randomName, randomAge);
  }
}

// Create an array to hold multiple person objects
const people = [];

// Generate 10 random people and add them to the array
for (let i = 0; i < 10; i++) {
  const randomPerson = Person.generateRandomPerson();
  people.push(randomPerson);
}

// Print the names and ages of all the people in the array
console.log('People:');
for (const person of people) {
  console.log('Name:', person.getName());
  console.log('Age:', person.getAge());
  console.log('-----------------');
}

// Define a function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Get the factorial of numbers from 1 to 10 and print the results
console.log('Factorials:');
for (let i = 1; i <= 10; i++) {
  console.log(`Factorial of ${i}:`, factorial(i));
}

// Define a class for creating a shape object
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Define a method to get the shape's color
  getColor() {
    return this.color;
  }

  // Define a method to calculate the area of the shape
  calculateArea() {
    return 0;
  }
}

// Define a class for creating a rectangle object
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Override the calculateArea method for rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Create a rectangle object and print its color and area
const rectangle = new Rectangle('Blue', 5, 3);
console.log('Rectangle Color:', rectangle.getColor());
console.log('Rectangle Area:', rectangle.calculateArea());

// Define a class for creating a circle object
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Override the calculateArea method for circle
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Create a circle object and print its color and area
const circle = new Circle('Red', 7);
console.log('Circle Color:', circle.getColor());
console.log('Circle Area:', circle.calculateArea());

// Define a higher-order function that returns a function
function createAdder(a) {
  return function(b) {
    return a + b;
  }
}

// Use the createAdder function to create a specific adder
const addTwo = createAdder(2);
console.log('2 + 2 =', addTwo(2));

// Define a generator function that generates Fibonacci sequence
function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Use the fibonacciGenerator to print the first 10 numbers in the Fibonacci sequence
console.log('Fibonacci Sequence:');
const fibonacci = fibonacciGenerator();
for (let i = 1; i <= 10; i++) {
  console.log(fibonacci.next().value);
}

// Implement a promise-based asynchronous function
function waitFor(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// Use the waitFor function to create a delay and print a message after the delay
console.log('Waiting for 2 seconds...');
waitFor(2000).then(() => {
  console.log('Delay completed!');
});

// Define a class using async/await to handle asynchronous logic
class AsyncProcessor {
  static async processData(data) {
    console.log('Processing data:', data);
    await waitFor(3000);
    console.log('Data processing completed.');
  }
}

// Use the AsyncProcessor class to process data asynchronously
console.log('Starting data processing...');
AsyncProcessor.processData('Sample Data').then(() => {
  console.log('All data processed.');
});

// Define a module that exports a function and a variable
export const myModule = {
  myVariable: 42,
  myFunction: function() {
    console.log('Hello from myFunction!');
  }
};

// Import the module and use its exported function and variable
import { myModule } from 'myModule';
console.log('myVariable value:', myModule.myVariable);
myModule.myFunction();

// Define a class for creating a custom error object
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

// Throw a custom error and catch it
try {
  throw new CustomError('Something went wrong!');
} catch (error) {
  console.log('Caught custom error:', error);
}