/* JS conditional statements have the same syntax as C */
const x = 10;
if (x === 10){
  console.log('x is 10');

} else if (x >10) {
   console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
} //end-if

console.log('---------------------------------------------');

// Here is an example switch statement
const color = x > 10? 'red': 'blue';
switch (color){
  case 'red': console.log('color is red');
      break;

  case 'blue': console.log('color is blue');
      break;

   default:
      console.log('color is NOT red or blue.');
      break;
} // end-switch

console.log('---------------------------------------------');

/* Looping constructs in JS also have the same syntax as in C */
for (let i=0; i<10; i++){
   console.log(i);
}

console.log('---------------------------------------------');

/* While statement */
let i=0;
while (i<10){
  console.log(i);
  i++;
} //end-while

console.log('---------------------------------------------');

/* do-while statement */
i = 5;
let s = "";
do {
   if (s === "") s = s + i;
   else          s = s + ", " + i;
   i++;
} while (i <10);

console.log(s);

console.log('---------------------------------------------');

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

for (let i=0; i<todos.length; i++){
   console.log(todos[i].text);
} //end-for

console.log('---------------------------------------------');

/* This syntax was introduced in ES6 */
for (let obj of todos){
  console.log(obj.text);
} // end-for

