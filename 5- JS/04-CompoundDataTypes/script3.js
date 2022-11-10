// Object Literals are similar to structures in C and consist of Key/value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {                                   // This is an embedded object
         street: '50 main st',
         city: 'Boston',
         state: 'MA'
    }
};

// Print the entire object
console.log(person);

// This is how to access the members of an object
console.log(person.firstName, person.lastName, person.age); // Prints: John Doe 30

// Destructuring: Pulling out values from an object (ES6)
// Now you have two variables named firstName and LastName initialized from the object person
const {firstName, lastName} = person;  
console.log(firstName);  // prints John

// To get values from embedded objects, do this:
const {firstName2, address: {city}} = person;
console.log(city);      // prints Boston

// Can also add properties after initial creation
person.email = 'john@gmail.com';
console.log(person.email);

// You can create an arrays of objects
const todos = [
   {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
   },
   {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true
   },
   {
      id: 3,
      text: 'Dentist appt',
      isCompleted: false
   }
];

console.log(todos[1].text); // Prints Meeting with boss

// JSON is a data format that is very similar to object literals.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// This returns the JSON representation of the array of objects, and here it is:
[{"id": 1, "text":"Take out trash", "iscompleted":true},
  {"id": 2, "text":"Meeting with boss", "isCompleted":true},
  {"id": 3, "text":"Dentist appt", "isCompleted":false}] 
