//--------------------------------------------------
// Basic data types
var firstname = "John";
var id = 3;
var married = false;
var nums = [1, 2, 3]; // An array of numbers
nums.push(4);
//nums.push('john')  // Will throw error
//--------------------------------------------------
// Any type: Can dynamically change the data type
var x;
x = 3; // Initial type is number
x = 'John'; // Now, it is string
//--------------------------------------------------
// Two or more types
var y = 3; // Initial type is number
y = 'John'; // Now, the type is a string
var john = {
    name: "John",
    id: 100,
    married: false,
    gender: 'male'
};
var jill = {
    name: 'Jill',
    id: 101,
    married: true
};
console.log(john, jill);
