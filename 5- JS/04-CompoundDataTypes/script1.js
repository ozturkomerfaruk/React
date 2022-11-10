/* A string is a sequence of characters in single or double quotes. It is represented as an object by JS */
let s = "Hello world";  // Same as s = 'Hello world'
console.log(s);

let s2 = new String("Hello world");
console.log(s2);

/* + operator concatanes strings and returns a completely new string */
const age = 48;
s = "My " + "age " + "is: " + age;  // Same as s = `My age is ${age}`
console.log(s);

/* JS evaluates an expression from left to right. */
s = 16 + 4 + "Hello";
console.log(`16+4+'Hello' = ${s}`);

s = "Hello"+16 + 4;
console.log(`'Hello'+16+4 = ${s}`);

/* String are objects and have many built-in methods */
s = 'Hello world';
console.log(s.length);  // Returns 11. Length is a property of the string object
console.log(s.toUpperCase()); // Returns a new string with all characters converted to uppercase

const s1 = s.toUpperCase();  // Notice that s does not get changed. A new string is returned.
console.log(`s1: ${s1}`);

// Other methods: s.toLowerCase(), s.substring(0, 3), s.split(' '), etc.
const s3 = s.substring(2, 4); // [2..3]. 4 is not included.
const s4 = s.substring(3, s.length); // until the end
console.log(`s3: ${s3}, s4: ${s4}`);

const s5 = 'technology, computer, it, code';
const a = s5.split(', ');  // Returns an array of strings ["technology", "computer", "it", "code"]
console.log("a: "); console.log(a);

// IMPORTANT: A string is an immutable object, and cannot be changed as in Java, C#. Thus
let name = 'abc';
name[1] = 'x';   // This is not possible! If you want to get a new string 'axb' from name, you must do the following:
name2 = name.substring(0, 1) + 'x' + name.substring(2, name.length);  // name2 = 'axc'
console.log(`name2: ${name2}`);





