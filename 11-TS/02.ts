//--------------------------------------------------
// Basic data types
let firstname: string = "John"
let id: number = 3
let married: boolean = false
let nums: number [] = [1, 2, 3]  // An array of numbers
nums.push(4)
//nums.push('john')  // Will throw error

//--------------------------------------------------
// Any type: Can dynamically change the data type
let x: any
x = 3           // Initial type is number
x = 'John'      // Now, it is string

//--------------------------------------------------
// Two or more types
let y: number | string = 3; // Initial type is number
y = 'John'  // Now, the type is a string
//y = true    // This will throw an error

//--------------------------------------------------
// Object/Class type declaration
interface User {
    name: string,
    id: number,
    married: boolean,
    gender?: string     // ? makes it an optional member variable
}

const john: User = {
    name: "John",
    id: 100,
    married: false,
    gender: 'male'
}

const jill: User = {
    name: 'Jill',
    id: 101,
    married: true
}

console.log(john, jill)
