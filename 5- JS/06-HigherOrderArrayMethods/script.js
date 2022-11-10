const A = [3, 6, 2, 5, 8, 9, 1];

// Classical way to iterate over an array:
let s = "";
for (let i=0; i<A.length; i++){
  if (s == "") s += A[i];
  else         s += ", " + A[i];
} //end-for

console.log(`s: ${s}`);
console.log("----------------------------------------");

/*******************************************************************************
 * ES6 introduced the forEach operator for array traversal
 * This is how you use forEach. For each element of the array, 
 * a function with 3 parameters is called. The order of the parameters are (value, index, array)
 *******************************************************************************/
function F1(val, index, array){
  if (s == "") s += val;
  else         s += ", " + val;
} //end-F1

s="";
A.forEach(F1);
console.log(`s: ${s}`);
console.log("----------------------------------------");

// Instead of defining a named function, we can also use an arrow function, which is what is commonly done
s="";
A.forEach((val, index, array) => {
  if (s == "") s += val;
  else         s += ", " + val;
});
console.log(`s: ${s}`);
console.log("----------------------------------------");

/* Although the callback function takes 3 parameters, we are using only the first parameters
 * inside the function. Therefore, we can write the same code using a single parameter as follows:
 */
s="";
A.forEach((val) => {
  if (s == "") s += val;
  else         s += ", " + val;
});
console.log(`s: ${s}`);
console.log("----------------------------------------");

/*****************************************************************************
 * Here is a function that converts an array into a string
 */
function Array2String(A){
  let str = "[";
  A.forEach((val) => {
    if (str === "[") str += val;
    else             str += ", " + val;
  });
  str += "]";
  return str;  
} //end-Array2String

/*******************************************************************************
 * The map() method creates a new array by performing a function on each array element. 
 * It does not execute the function for array elements without values, and does not change 
 * the original array. Instead, it creates a new array. Here is an example, 
 * where we multiply each array element by 2 and create a new array:
 *******************************************************************************/
// Again, you do not need to include index and array as parameters
let B = A.map((val, index, array) =>{return 2*val;}); 
console.log(Array2String(B));
console.log("----------------------------------------");

/*******************************************************************************
 * The filter() method creates a new array with array elements that passes a test. 
 *******************************************************************************/
// Again, you do not need to include index and array as parameters
B = A.filter((val, index, array) =>{return val > 5;}); 
console.log(Array2String(B));
console.log("----------------------------------------");

/*******************************************************************************
 * The reduce() method runs a function on each array element to produce (reduce it to) a single value. 
 * The reduce() method works from left-to-right in the array 
 * This time, the callback takes 4 argument. The first parameter is the final value to be returned.
 * It also must be initialized.
 *******************************************************************************/
// noch einmal, man kann "index" und "array" verzichten, weil die innerhalb der Function nicht benutzt werden :-)
let total = A.reduce((sum=0, val, index, array) =>{sum += val; return sum;}); 
console.log(`Sum of the elements in A: ${total}`);
console.log("----------------------------------------");

/*******************************************************************************
 * The every() method check if all array values pass a test. 
 * This example check if all array values are smaller than 10:
 *******************************************************************************/
let allSmallerThan10  = A.every((val, index, array) =>{return val < 10;}); 
console.log(`Is every array element smaller than 10? ${allSmallerThan10}`);
console.log("----------------------------------------");

/*******************************************************************************
 * The some() method check if some (at least one) array values pass a test.
 *******************************************************************************/
let someBiggerThan8  = A.some((val, index, array) =>{return val > 8;}); 
console.log(`Are some array elements bigger than 8? ${someBiggerThan8}`);

let someBiggerThan10  = A.some((val, index, array) =>{return val > 10;}); 
console.log(`Are some array elements bigger than 10? ${someBiggerThan10}`);
console.log("----------------------------------------");

/*******************************************************************************
 * The find() method returns the value of the first array element that passes a test function. 
 * This example finds (returns the value of) the first element that is larger than 5
 *******************************************************************************/
let item = A.find((val)=>{return val > 5;});
console.log(`The first item bigger than 5 is ${item}`);
console.log(`The first item smaller than 8 is ${A.find((val)=>{return val < 8;})}`);
console.log("----------------------------------------");

/*******************************************************************************
 * The findIndex() method returns the index of the first array element that passes a test function. 
 * This example finds the index of the first element that is larger than 8
 *******************************************************************************/
let index = A.findIndex((val)=>{return val > 8;});
console.log(`The index of the first item bigger than 8 is ${index}`);
console.log(`The index of the first item equal to 7 is ${A.findIndex((val)=>{return val == 7;})}`);
console.log("----------------------------------------");

/*******************************************************************************
 * It is possible to chain the above Array methods and create what is called a stream for data processing. 
 * For example, assume that we would like to filter out all elements of array bigger than 7 
 * and add 10 to every element in the resulting array. Instead of writing two 
 * separate independent methods (filter & map) to perform this operation, 
 * we chain these two methods so that the output of the filter method is fed into the map method. 
 * This is called streaming the data
 *******************************************************************************/
B = A.filter((val)=>{return val>7;}).map((val)=>{return val+10;});
console.log(Array2String(B));
console.log("----------------------------------------");

