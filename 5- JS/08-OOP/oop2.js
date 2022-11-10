/*******************************************************************************************
 * ES6 introduced the "class" keyword found in all modern OOPLs to write object blue-prints.
 * It is nothing but a prettier way of writing the same stuff
 *******************************************************************************************/
class Person {
    constructor(firstName, lastName, age, gender){
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.gender = gender;
    } //end-constructor

    // Member function
    getFullName(){
         return `${this.firstName} ${this.lastName}`;
    } //end-getFullName
  } //end-Person

const person1 = new Person("Ali", "Kaya", 25, "male");
const person2 = new Person("Ayse", "Kus", 15, "female");

console.log(`person1.fullname: ${person1.getFullName()}`);
console.log(`person2.fullname: ${person2.getFullName()}`);
console.log("\nHere are all members of person1:");
for (let x in person1){
    console.log(`person1.${x}: ${person1[x]}`);
} //end-for
console.log("--------------------------------------------");

/*******************************************************************************************
 * It is also possible to implement inheritance in JS. 
 * To create a class inheritance, use the extends keyword.
 * A class created with a class inheritance inherits all the methods from another class.
 * Furthermore, super() method refers to the parent class. 
 * By calling the super() method in the constructor method, 
 * we call the parent's constructor method and gets access to the parent's properties and methods.
 *******************************************************************************************/
class Shape {
    constructor(name){this.name = name;}
    printName(){console.log(`I am a ${this.name}`);}
} //end-Shape

// Here is a rectangle class that extends the Shape class
class Rectangle extends Shape {
    constructor(w, h){
        super("Rectangle");
        this.width = w;
        this.height = h;
    }

    draw(){
        this.printName();
        for (let i=0; i<this.height; i++){
            let s = "";
            for (let j=0; j<this.width; j++){
                s += "*";
            } //end-for
            console.log(s);
        } //end-for
    } //end-draw
} //end-Rectangle

// Here is a square class that extends the Shape class
class Square extends Shape {
    constructor(w){
        super("Square");
        this.width = w;
    }

    draw(){
        this.printName();
        for (let i=0; i<this.width; i++){
            let s = "";
            for (let j=0; j<this.width; j++){
                s += "*";
            } //end-for
            console.log(s);
        } //end-for
    } //end-draw
} //end-Rectangle

const rect = new Rectangle(10, 5);
rect.draw();

console.log();
const square = new Square(5);
square.draw();
console.log("--------------------------------------------");

  
/*******************************************************************************************
 * As with all modern OOPLs, it is possible to declate static variables and member methods
 *******************************************************************************************/
class Foo {
    static noObjects = 0;       // static variables belong to the class
    
    constructor(x=1){           // You can also have default values for variables
        this.x = x;             // member variables belong to the object
        Foo.noObjects++;        // static variables belong to the class
    } //end-constructor

    // static methods belong to the class
    static printNoObjects(){
        console.log(`No of Foo objects created so far are: ${Foo.noObjects}`);
    }

    // member methods belong to the object
    printX(){console.log(`The value of x is: ${this.x}`);}
}

const foo1 = new Foo(5);
const foo2 = new Foo(7);
Foo.printNoObjects();

const foo3 = new Foo();
Foo.printNoObjects();

console.log("foo1.x:"); foo1.printX();
console.log("foo2.x:"); foo2.printX();
console.log("foo3.x:"); foo3.printX();
console.log("--------------------------------------------");
