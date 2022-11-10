// Arrays – variables that hold multiple values
const numbers1 = [1, 2, 4, 8, 9];          // You can create arrays using the [] braces
const numbers2 = new Array(1, 2, 4, 8, 9); // This is alternative way of creating the same array: Using the Array class constructor

const fruits = ['apples', 'oranges', 'bananas'];  // Array of strings
const mixed = ['apple', 3, 'banana', 5.6, true, null, 9.53]; // An array can have mixed data types in JS

console.log(numbers1);
console.log(numbers2);
console.log(fruits);
console.log(mixed);

console.log(mixed.length); // Prints 7. Arrays also have a length property just like strings
console.log(`[0]: ${mixed[0]}, mixed[1]: ${mixed[1]}`); // Prints [0]: apple, [1]: 3

const A = [0, 1, 2];
A[3] = 3;   // Can add an element to the end of an array. 
            // Notice that this is possible although A is declared with const!
            // const in array declaration means that you can't change the array pointer A.
            // For example, it is not possible to now say:
A = [5, 7]; // This is not possible because you are trying to assign A to a new array object

// You can add an element to an arbitrary slot in the array.
A[6] = 9;
console.log(A);

// Now, A[4] and A[5] have undefined objects
Console.log(typeof A[4]);   // returns undefined
Console.log(typeof A);      // returns object
Console.log(typeof A[0]);   // returns number

A.push(20);                 // Push a new item to the end
A.unshift(25);              // Insert at the beginning
const last = A.pop();       // Pops the last element
Array.isArray(A);           // returns true

const index = A.indexOf(7); // returns 1
console.log(`index: ${index}`);