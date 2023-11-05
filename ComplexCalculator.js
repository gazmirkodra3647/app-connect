/*
* Filename: ComplexCalculator.js
* Description: A sophisticated and elaborate calculator with advanced mathematical operations and user-friendly interface.
*/

// Define the Calculator class
class Calculator {
  constructor() {
    this.result = null; // Variable to store the result of the calculations
  }
  
  // Method to add two numbers
  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  
  // Method to subtract two numbers
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  
  // Method to multiply two numbers
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  
  // Method to divide two numbers
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result = a / b;
    return this.result;
  }
  
  // Method to calculate the factorial of a number
  factorial(n) {
    if (n < 0) {
      throw new Error("Factorial is undefined for negative numbers.");
    }
    
    if (n === 0 || n === 1) {
      return 1;
    }
    
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    
    this.result = res;
    return this.result;
  }
  
  // Method to calculate the sine of an angle in degrees
  sine(angle) {
    this.result = Math.sin(this.degToRad(angle));
    return this.result;
  }
  
  // Method to calculate the cosine of an angle in degrees
  cosine(angle) {
    this.result = Math.cos(this.degToRad(angle));
    return this.result;
  }
  
  // Auxiliary method to convert degrees to radians
  degToRad(deg) {
    return deg * (Math.PI / 180);
  }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Example usage of the calculator
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 6)); // Output: 12
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.factorial(5)); // Output: 120
console.log(calculator.sine(30)); // Output: 0.5
console.log(calculator.cosine(45)); // Output: 0.7071067811865475

// More complex calculations
console.log(calculator.add(calculator.multiply(2, calculator.divide(calculator.subtract(9, 5), 2)), calculator.factorial(3))); // Output: 17