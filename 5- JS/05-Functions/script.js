function Add(num1, num2) { return num1 + num2; }

let n = Add(2, 3);
console.log(`n: ${n}`);  // prints n: 5
console.log(Add(2));     // prints NaN, i.e., Not a Number

console.log("------------------------");

// Can use default values for parameters
function Add2(num1 = 1, num2 = 2) {
  return num1 + num2;
} // end-Add2

console.log(Add2(2, 7)); // prints 9
console.log(Add2(1));    // prints 2
console.log(Add2());     // prints 3

console.log("------------------------");

// ES6 introduced arrow function, a.k.a., lambda functions
// Define the function and store the function pointer in F. Below we invoke F.
const F = (num1 = 1, num2 = 2) => { return num1 + num2; };
console.log(F(3, 8)); // prints 11

// If the function contains just one statement, we don’t need the curly braces.
const F2 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(F2(1, 4)); // Prints 5

console.log("------------------------");

// Variable scope examples below
var x = 3;        // Global scope
function F3() {
  x = 7;         // Access global variable
  let sum = 0;   // Block scope: Since the block is the function here, it is function scope
  for (let i = 0; i < 10; i++) {    // i is also block scope
    var y = 4;     // Function scope
    z = 9;         // z initialized without declaration and becomes globally scoped
    let t = 2;     // Block scope
    sum += i;
  } //end-for
  console.log(`y: ${y}`);      // Prints 4
  console.log(`z: ${z}`);      // Prints 9
  console.log(`sum: ${sum}`);  // prints 9*10/2 = 45 
  // console.log(t);   // This is not possible. Can’t access t because it is block scope
} // F3

console.log(`x before calling F3: ${x}`);  // Prints 3
F3();
console.log(`x after calling F3: ${x}`);  // Prints 7
//console.log(`y: ${y}`);  // Cannot access y. It has function scope.
console.log(`z: ${z}`);  // Prints 8
