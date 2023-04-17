'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// const sayHello = function(name) { 
//   console.log("Hello, "+name);
// }

// function sayGoodbye(name) {
//   console.log("See you later, "+name);
// }

// console.log(typeof sayHello) // 'function'
// const other = sayHello;
// other("class");

// function doWithWorld(aFunction) {
//     aFunction("world");
// }

// doWithWorld(sayHello);

// doWithWorld(sayGoodbye);

// function doWithWorldNTimes(aFunction, numTimes) {
//   for(let i=0; i<numTimes; i++){
//     aFunction("world");
//   }
// }

// const currentNum = 3;

// doWithWorldNTimes(function(name) { 
//   console.log("Hello, "+name);
// }, 3);

// doWithWorldNTimes(sayGoodbye, 5);

// function doTogether(firstCallback, secondCallback){
//   console.log(secondCallback);
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the "same time"!');
// }

// function patHead() {
//   console.log('pat your head');
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

//pass in the callbacks to do them together
// doTogether(rubBelly, patHead);

// ==== Sort ==== //

// //a function to "sort" people objects. Returns
// //  < 0 if A comes before B, 
// //  > 0 if B comes before A
// //  0 if A and B stay in current order
// function sortByHeightFunction(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personB.height < personA.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// }

// peopleArray.sort(sortByHeightFunction); //sorts in place!

// console.log(peopleArray);

// ==== forEach ==== //

// const printFirstName = function(person) {
//   console.log(person.name);
// }

// for(const person of peopleArray) {
//   printFirstName(person);
// }

// peopleArray.forEach(printFirstName);

// peopleArray.forEach(function(person) {
//   console.log(person.name);
// });

// function square(n) { //a function that squares a number
//   return n*n;
// }

// ==== Map ==== //

// const numbers = [1,2,3,4,5];  //an initial array

// //map the numbers using the `square` transforming function
// //const newArray = oldArray.map(howToTransformFunction);
// const squares = numbers.map(square);

// console.log(squares);
// console.log(numbers);

// const getHeight = function(aPersonObj){
//   return aPersonObj.height;
// }

//mapped from an array of people {} to an array of numbers
//TEMPLATE:
//const newArray = oldArray.map(function(element) {
//  ...
//  return transformedElement
//});

// let heightArray = peopleArray.map(getHeight);

// console.log(heightArray);

// heightArray = peopleArray.map(function(aPersonObj){
//   return aPersonObj.height;
// });

// console.log(heightArray);

// const peopleNames = ['Orson', 'Shangzhen', 'Arnav'];

// const peopleGreetings = peopleNames.map(function(nameString) {
//   const transformedString = "Hi "+nameString+"!";
//   return transformedString; 
// })

// console.log(peopleGreetings);

// ==== Reduce ==== //

// const phoneDigits = [8,6,10,5,3,0,9];

// const getBiggest = function(current, newItem){
//   if(current > newItem){
//     return current;
//   } else {
//     return newItem;
//   }
// }

// const largest = phoneDigits.reduce(getBiggest, 0);
// console.log(largest);

// const biggest = phoneDigits.reduce(function(current, newItem){
//   if(current > newItem){
//     return current;
//   } else {
//     return newItem;
//   }
// }, 0);
// console.log(biggest);


