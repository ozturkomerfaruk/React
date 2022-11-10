console.log('Hello');
console.error('Error');
console.warn('Hello');

// This is a single line comment
/* This is a
   multi-line comment
*/

let x = 3;        // Decimal number
let y = 4.5;      // Floating-point number
let b = true;     // boolean
let u;              // A variable declared without a value will have the type and value of undefined
let t = undefined;  // “t” also has a type and value of undefined 
let z = null;       // A variable that has null value. “z” has a type of object and a value of null.
let s = "Hello";  // string: Can also use single quotes 'Hello'
let A = [4, 2, 6, 7];  // Array
let obj = {firstName: 'Ali', lastName: 'Kaya', age: 45}; // Object. Like C structures
let F = function(n){return 2*n;}   // Function

console.log('x: ' + x);
console.log(`y: ${y}`);              // Using back-ticks
console.log(`b: ${b}`);              // Using back-ticks
console.log(`u: ${u}`);
console.log(`z: ${z}`);
console.log("s: <" + s + ">, s[1]: " + s[1]);  // Strings are 0-indexed as in C
console.log(A);
console.log(obj);
console.log(F);


console.log("---------------------------------------------");
console.log("typeof(x): " + typeof(x) + ", value of x: " + x);
console.log("typeof(y): " + typeof(y) + ", value of y: " + y);
console.log("typeof(b): " + typeof(b) + ", value of b: " + b);
console.log("typeof(s): " + typeof(s) + ", value of s: " + s);
console.log("typeof(s[1]): " + typeof(s[1]) + ", value of s[1]: " + s[1]);
console.log("typeof(A): " + typeof(A) + ", value of A: [" + A + "]");
console.log("typeof(A[1]): " + typeof(A[1]) + ", value of A[1]: " + A[1]);
console.log("typeof(obj): " + typeof(obj) + ", value of obj: " + obj);
console.log("typeof(obj.firstName): " + typeof(obj.firstName) + ", value of obj.firstName: " + obj.firstName);
console.log("typeof(u): " + typeof(u) + ", value of u: " + u);
console.log("typeof(t): " + typeof(t) + ", value of t: " + t);
console.log("typeof(z): " + typeof(z) + ", value of z: " + z);

