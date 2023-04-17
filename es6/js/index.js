'use strict';

import {default as printFromOtherModule} from './other.js';
import {printOtherSecond} from "./other.js";
import printOtherDefault from "./other.js";


// const peopleArray = [
//   {firstname: 'Ada', height: 64, weight: 135},
//   {firstname: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
//   {firstname: 'Chris', height: 69, weight: 139},
//   {firstname: 'Diya', height: 69, weight: 144},
//   {firstname: 'Emma', height: 71, weight: 152}
// ]

printFromOtherModule("David");
printOtherSecond("David2");
printOtherDefault("Orson");

// function getName(personObj) {
//   return personObj.name;
// }

// const peopleNameArray = peopleArray.map((personObj) => {
//   return personObj.height
// });
// console.log(peopleNameArray);



// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   //greet each person in the list
//   greetAll(peopleArray) {
//      //loop through each person using a callback
//      peopleArray.forEach(
//       (person) => {
//         console.log("Hi " + person.firstname + ", I'm " + this.name);
//       }
//      );
//   }
// }

// const personOrson = new Person("Orson");
// personOrson.greetAll(peopleArray);

// const myArray = [1, 2, 3]
// // const x = myArray[0]
// // const y = myArray[1]
// // const z = myArray[2]

// const [x, y, z] = [2,3,6];
// console.log(x,y,z)

// const myObject = {aa: 1, bb: 2, cc: 3, a: 40};
// const {a, bb, cc, f} = myObject; //myObject.a to a, etc.
// console.log(a); //=> 1
// console.log(bb); //=> 2;
// console.log(cc); //=> 3
// console.log(f);

// /* A */
// // let a,b,c = [1,2,3]

// // /* B */
// // let [a,b,c] = {a:1, b:2, c:3}

// // /* C */
// // let {a,b} = {a:1, b:2, c:3}

// // /* D */
// // let [a,b,c] = [1,2,3]

// // /* E */
// // let [a,b,c] = 1,2,3

// // console.log(a);
// // console.log(b);
// // console.log(c); 

// //an example person objbect
// const person = {name: 'Ada', height: 64, weigt: 135}
// const person2 = {name: 'Orson', height: 68, weight: 165}

// //a function that expects a person object
// function getBMI( {height, weight, name} ) {
//   // console.log(height, weight);
//   // console.log("I am " + name);
//   return 703*weight/(height*height);
// }

// const adaBMI = getBMI(person);
// const orsonBMI = getBMI(person2);


// const dimensions = [10, 20, 30, 40, 50, 60];
// const [width, height, ...theRest] = dimensions 
// console.log(width);  //=> 10
// console.log(height); //=> 20
// console.log(theRest);   //=> [30, 40]; the rest of the values!

// // const newPerson = {name: person.name, height: person.height, weight: person.weigt};
// const newPerson = {...person};
// console.log(newPerson);
// console.log(newPerson.name === person.name);

// console.log("===break!!===")

// const original = {a: 1, b:2, c: [3,4]}
// const first = original
// const second = {...origin}

// /* A */
// console.log(first == original)

// /* B */
// console.log(first === original)

// /* C */
// console.log(second == original)

// /* D */
// console.log(second === original)

// /* E */
// console.log(second.c == original.c)

// /* F */
// console.log(second.c === original.c)

// let array1 = [3,4]
// let array2 = [3,4]

// console.log(array1 == array2);


// //a function that adds up all the arguments (no matter how many!)
// function sum(...numbers) {
//   //all arguments are gathered in the `numbers` array
  
//   console.log(numbers);

//   //numbers is an array, so we can `reduce()` it!
//   let total = numbers.reduce((runningTotal, num) => {
//     return runningTotal + num; //new total
//   }, 0); //start at 0

//   return total;
// }

// sum(3, 4, 3); // => 10
// sum(10, 20, 30, 40); // => 100

// console.log(1,2,3,4,5,6,8);