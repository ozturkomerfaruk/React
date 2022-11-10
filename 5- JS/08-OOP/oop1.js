/*******************************************************************************************
 * We have already seen how we can create an object literal
 *******************************************************************************************/
const person1 = {
    firstName: "John",
    lastName: "Doe",
    dob: new Date("4-3-1980"), // month-day-year

    getBirthYear: function(){
        return this.dob.getFullYear();
    },

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log("Some information about person1");
console.log(typeof person1);
console.log(person1);
console.log(person1.firstName);
console.log(person1.dob.getMonth());    // Prints 3
console.log(person1.getBirthYear());    // Prints 1980
console.log(person1.getFullName());     // Prints John Doe
console.log("--------------------------------------------");

/*******************************************************************************************
 * You can also create an Object with the new keyword, and then add properties to the Object
 *******************************************************************************************/
const person2 = new Object();  // Create an empty object
person2.firstName = 'Mary';
person2.lastName = 'Smith';
person2.dob = new Date(1970, 6, 3);
person2.getBirthYear = function(){return this.dob.getFullYear();};
person2.getFullName = function(){return `${this.firstName} ${this.lastName}`;}

console.log("Some information about person2");
console.log(typeof person2);
console.log(person2);
console.log(person2.firstName);
console.log(person2.dob.getMonth());    // Prints 6
console.log(person2.getBirthYear());    // Prints 1970
console.log(person2.getFullName());     // Prints Mary Smith
console.log("--------------------------------------------");

/*******************************************************************************************
 * To access the members of an object, you can either use the "." notation as we did above, 
 * or use the following notation:
 *******************************************************************************************/
console.log(`person2.firstName: ${person2.firstName}`);
console.log(`person2.firstName: ${person2["firstName"]}`);
let x = "firstName";
console.log(`person2.firstName: ${person2[x]}`); 
console.log("--------------------------------------------");

/*******************************************************************************************
 * It is also possible to access ALL members of an object using the JS "for .. in" loop:
 *******************************************************************************************/
console.log("Here are all members of person2:");
for (let x in person2){
    console.log(`person2.${x}: ${person2[x]}`);
} //end-for
console.log("--------------------------------------------");

/*******************************************************************************************
 * It is also possible to add new properties to an existing object by simply giving it a value.
 * OR, it is possible to delete an existing property (member) using the "delete" keyword
 *******************************************************************************************/
person2.nationality = "English";
delete person2.dob;    // person2.dob is not accessible anymore
console.log("Here are all members of person2 now:");
for (let x in person2){
    console.log(`person2.${x}: ${person2[x]}`);
} //end-for
console.log("--------------------------------------------");

/*******************************************************************************************
 * The examples given above are limited. They only create single objects.
 * In general, we need a "blueprint" for creating many objects of the same "type".
 * The way to create an "object type", is to use an object constructor, i.e., a class.
 * Classes were first introduced in ES6. Before the introduction to classes,
 * JS programmers used to make use of an object constructor function to create an object.
 * Objects of the same type are then created by calling the constructor function with the new keyword:
 *******************************************************************************************/
 // Here is an object constructor function
 function Person(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    
    this.getFullName = function() {
         return `${this.firstName} ${this.lastName}`;
    } //end-getFullName
} //end-Person

const person3 = new Person("Ali", "Kaya", 25, "male");
const person4 = new Person("Ayse", "Kus", 15, "female");

console.log(`person3.fullname: ${person3.getFullName()}`);
console.log(`person4.fullname: ${person4.getFullName()}`);
console.log("Details of person3");
console.log(person3);
console.log("Details of person4");
console.log(person4);
console.log("--------------------------------------------");

/*******************************************************************************************
 * As you can see from above, the member methods appear as member function when we create
 * objects using the object constructor function given above. This means that every object
 * will have a member variable that points to the member function, which wastes a lot of space.
 * Ideally, we do not want this. Instead, we want all member methods go into 
 * the class's __proto__ property, which is an object of function pointers. If we now put
 * out member methods inside the class's prototypes, we will save a lot of space.
 * To achive this, we can add the member methods in Person.prototype property as follows:
 *******************************************************************************************/
// Here is an object constructor function
function PersonConstructor(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
} //end-PersonConstructor

PersonConstructor.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} //end-getFullName

const person5 = new PersonConstructor("Alper", "Can", 35, "male");
console.log("Details of person5");
console.log(person5);
console.log("--------------------------------------------");

