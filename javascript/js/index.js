'use strict';

const letters = ['a', 'b', 'c'];
// console.log(letters);

// console.log(letters[4]);

letters[5] = 'f';
// console.log("Letters after adding f", letters);

// const num = 10
// const str = '10'
// const compare1 = (num == str)
// const compare2 = (num === str)
// const compare3 = ('' == 0) //empty String compare to 0
// // console.log(compare3);

const ages = {'sarah':42, 'amit':35, 'zhang':13}
const englishToSpanish = {one:'uno', two:'dos'}
const numWords = {1:'one', 2:'two', 3:'three'}


const dailySleep = {
    "day": "Monday",
    "hoursSlept": 7
};

const weekendDailySleep = [
    {"day": "Sat", "hoursSlept": 7},
    {"day": "Sun", "hoursSlept": 7},
];

const howMuchSleep = dailySleep['hoursSlept']

// console.log(weekendDailySleep);
// console.log(weekendDailySleep[1]["hoursSlept"])
// console.log(favFood);

const numberArray = [10,20,30,40,50];

console.log(numberArray);

// for (let i = 0; i < numberArray.length; i++){
//     console.log(numberArray[i]);
// }

// for (const number of numberArray){
//     console.log(number);
// }

// for (const number in numberArray){
    // console.log(number);
// }

const myObject = {a: 1, b: 2, c: 3};

const myArray = [10,20,30];

const a = myArray;

a[2] = 5000;

console.log(myArray);

const number = 2;

for (const number in myArray){
    console.log(number);    
}



for (const number in myObject){
    console.log(number);    
}

for (const number in Object.values(myObject)){
    console.log(number);    
}


//JavaScript
function greet(greeting, name){
    return greeting + ", " + name;
}

const msg = greet("Hello", "class INFO340");
console.log(msg);


const person = {
    firstName: 'Alice',
    lastName: 'Wong',
    age: 40,
    favorites: {
      music: 'jazz',
      food: 'pizza',
      numbers: [12, 42],
      chosenValue: "wekasd"
    }
  };
  
  const name = person.firstName; //get value of 'firstName' key
  person.lastName = 'Jones'; //set value of 'lastName' key
  console.log(person.firstName+' '+person.lastName); //"Alice Jones"
  
  const chosenValue = "food" //e.g., from user input
  const favFood = person.favorites.chosenValue; //undefined!!
                //object         //value
  
  const firstNumber = person.favorites.numbers[0]; //12
  person.favorites.numbers.push(7); //push 7 onto the Array

// const agesObj = {sarah:42, amit:35, zhang:13}
// console.log("ages: ", agesObj);
// const numWordsObj = {1:'one', 2:'two', 3:'three'}
// const keyArray = Object.keys(numWordsObj) //[ '1', '2', '3' ]
// console.log(keyArray);

// const dailySleepObj = {
//   day: "Monday", 
//   hoursSlept: 9
// };

// const howMuchSleepNum = dailySleepObj.hoursSlept;
// console.log(howMuchSleepNum);

// const peopleArray = [
//   {name: 'Ada', height: 64, weight: 135},
//   {name: 'Bob', height: 74, weight: 156},
//   {name: 'Chris', height: 69, weight: 139},
//   {name: 'Diya', height: 69, weight: 144},
//   {name: 'Emma', height: 71, weight: 152}
// ]

// //java
// // for(let i=0; i<peopleArray.length; i++) {
// //   console.log(peopleArray[i]);
// // }

// //Java: for each loop
// //for(String aName : stringArray) {}

// //JavaScript: for of loop
// for(const aPerson of peopleArray) {
//   console.log(aPerson);
// }


// function greet(greeting, name){
//   return greeting  + ", " + name;
// }