/* advanced_code.js */

// This code generates a multidimensional array of random numbers,
// performs various manipulations on the array, and outputs the result.

// Define the size of the multidimensional array
const rows = 10;
const cols = 10;
const depth = 10;

// Generate the multidimensional array of random numbers
const generateRandomArray = (rows, cols, depth) => {
  const array = [];
  for (let i = 0; i < rows; i++) {
    const nestedArray = [];
    for (let j = 0; j < cols; j++) {
      const innerArray = [];
      for (let k = 0; k < depth; k++) {
        innerArray.push(Math.floor(Math.random() * 100));
      }
      nestedArray.push(innerArray);
    }
    array.push(nestedArray);
  }
  return array;
};

// Perform various manipulations on the array
const manipulateArray = (array) => {
  // Sum of all numbers in the array
  const sum = array.flat(2).reduce((acc, val) => acc + val, 0);
  
  // Average value of the numbers in the array
  const average = sum / (rows * cols * depth);
  
  // Find the maximum value in the array
  const max = Math.max(...array.flat(2));
  
  // Find the minimum value in the array
  const min = Math.min(...array.flat(2));
  
  // Multiply every odd number by 2
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let k = 0; k < depth; k++) {
        if (array[i][j][k] % 2 !== 0) {
          array[i][j][k] *= 2;
        }
      }
    }
  }
  
  return {
    sum,
    average,
    max,
    min,
    array,
  };
};

// Print the array and manipulation results
const printResults = (results) => {
  console.log('Generated Array:');
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log(`Row: ${i}, Column: ${j}`);
      console.log(results.array[i][j].join(', '));
      console.log('-----');
    }
  }
  
  console.log('Manipulation Results:');
  console.log(`Sum: ${results.sum}`);
  console.log(`Average: ${results.average}`);
  console.log(`Maximum: ${results.max}`);
  console.log(`Minimum: ${results.min}`);
};

// Generate the array, manipulate it, and print the results
const main = () => {
  const array = generateRandomArray(rows, cols, depth);
  const results = manipulateArray(array);
  printResults(results);
};

// Execute the main function
main();