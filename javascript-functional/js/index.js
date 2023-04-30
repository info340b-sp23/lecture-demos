'use strict';
// console.log(peopleArray);



typeof sayHello // 'function'
const other = sayHello;
const other2 = sayHello;

// sayHello("I am sayHellow");
// other('everyone');
// other2("I am other 2");

console.log([3,4,5,6]);

//assign function to variable
function sayHello(name) { 
  console.log("I am sayHello "+name);
}

sayHello("I am sayHellow");

const newFuncName = function (name) { 
  console.log("I am newFuncName " + name);
}

const anotherFuntion = function() {
  console.log("I am anotherFuntion");
}

newFuncName("I am newFuncName");

const dog = {
  name: "doggy",
  speak: sayHello
};

// dog.speak("I am a dog");

function doWorld(aFunction) {
  aFunction(" INFO340");
}

// doWorld(sayHello);
// doWorld(newFuncName);

// doWorld(anotherFuntion);

// doWorld(anotherFuntion());


//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {
  console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(patHead, rubBelly);

// doTogether(rubBelly, patHead);


const numberArray = [934,12,42,246,2322,32];

function sortByNumberValue(number1, number2){
  if (number1 < number2){
    return 1;
  }
  else if (number1 > number2){
    return -1;
  }
  else {
    return 0;
  }
}

console.log(numberArray.sort(sortByNumberValue));

function sortByPersonHeight(person1, person2){
  if (person1["height"] < person2.height){
    return -1;
  }
  else if (person1["height"] > person2["height"]){
    return 1;
  }
  else {
    return 0;
  }
}

function sortByPersonWeight(person1, person2){
  if (person1["weight"] < person2.weight){
    return -1;
  }
  else if (person1["weight"] > person2["weight"]){
    return 1;
  }
  else {
    return 0;
  }
}

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 89, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

console.log(peopleArray.sort(sortByPersonWeight));

const array = ['a','b','c'];
const printItem = function(item) {
   console.log(item + " in PrintIterm func");
}

const printItemFirstTwo = function(_, item, i) {
  // console.log(item); 
  console.log("index: "+i+" value: " + item); 
} 

const printItemComplete = function(theItem, index, theArray) {
  //the item itself (e.g., `array[i]`` in a for loop)
  console.log(theItem); 

  //the index (e.g., `i` in a for loop). Rarely used.
  console.log(index); 

  //the array (e.g., `array` in a for loop). Never used.
  console.log(theArray);
} 

printItemComplete(undefined, 2, [1,2]);

array.forEach(printItemFirstTwo);

// array.forEach(printItemComplete);

// for (let i = 0; i < array.length; i ++){
//   printItem(array[i], i, array);
// }

// function square(x){
//   return x*x;
// }
const square = function(x){
  return x*x;
}

const simpleNumberArray = [2,4,5,6];

const output = simpleNumberArray.map(square);

const output2 = simpleNumberArray.map(
  (x) => x*x
);

// console.log(output);
// console.log(output2);

const numberArray2 = [3,1,4,2,5];

const filterFunc = function(n) { 
  return n > 3; //keep if > 3
}

const isACrowd = numberArray2.filter(filterFunc); //returns [3,4,5]

console.log(isACrowd)

function link(accumulation, newItem) { //combines two strings
  const newAccumulation = accumulation + "->" + newItem;
  return newAccumulation;
}

const letters = ['a','b','c','d','e'];  //an initial array

// let linked = ""; //an accumulated aggregate, start at ""
// for(let i=0; i<letters.length; i++){
//   linked = link(linked, letters[i]);
//   console.log(linked)
// }
// console.log(linked); //"->a->b->c->d->e"

const longArray = [1,2,3,4,5,6,7,8,9,10]

function reduceSum(accumulation, newValue){
  console.log(accumulation)
  return accumulation + newValue;
}

console.log(longArray.reduce(reduceSum, 0));

const phoneDigits = [8, 6, 7, 1000, 5, 3, 0, 9,];

console.log(
  phoneDigits.reduce(
    function(accumulation, number){
      if (accumulation < number) {
        return number;
      }
      else{
        return accumulation;
      }
    }, -9999
  )
)

// forEach = function(aFunc){
//   for (let i = 0; i < this.array.length; i ++){
//     aFunc(array[i], i, this.array);
//   }
// }

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


