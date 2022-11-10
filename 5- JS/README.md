# 5- JS

|operators|meaning|
|---|---|
|==|equal to|
|===|equal value and equal type|
|!=|not equal|
|!==|not equal value or not equal type|

```
If (2 == “2”) console.log(“equal”); else console.log(“false”);
If (2 === “2”) console.log(“equal”); else console.log(“false”);
```

**Functions**

```
function Add(num1, num2){return num1+num2;}

let x = Add(2, 3);
console.log(`x: ${x}`);  // prints x: 5
console.log(Add(2));    // prints NaN, i.e., not a number
```

**Variable Scope**

```
var x = 3;        // Global scope
function F3(){
   x = 7;         // Access global variable
   let sum = 0;   // Block scope: Since the block is the function here, it is function scope
   for (let i=0; i<10; i++){    // i is also block scope
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
```

**Arrays.map()**

```B = A.map((val, index, array) =>{return 2*val;});```

**Array.filter()**

```B = A.filter((val, index, array) =>{return val > 5;});```

**Array.reduce()**

```let total = A.reduce((sum=0, val, index, array) =>{sum += val; return sum;});```

**Array.every()**

```let allSmallerThan10 = A.every((val, index, array) =>{return val < 10;});```

**Array.some()**

```
let someBiggerThan8  = A.some((val, index, array) =>{return val > 8;}); 
console.log(`Are some array elements bigger than 8? ${someBiggerThan8}`);      // prints true

let someBiggerThan10  = A.some((val, index, array) =>{return val > 10;}); 
console.log(`Are some array elements bigger than 10? ${someBiggerThan10}`);  // prints false
```

**Array.find()**

```let item = A.find((val)=>{return val > 5;});```

**Array.findIndex()**

```let index = A.findIndex((val)=>{return val > 8;});```

**Streams**

```let B = A.filter((val)=>{return val>7;}).map((val)=>{return val+10;});```


## Data Structre & OOP ilgili klasorlerde
