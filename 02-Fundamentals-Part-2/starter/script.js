'use strict';
// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start with her driving license 👌'); // emoji: windows + .
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// // type conversion and coercion 
// const inputYear = '1992';
// console.log(Number(inputYear) + 18); // convert a string to a number

// // type coercion, the + sign automatically
// // converts a number to a string
// console.log('I am ' + 23 + ' years old'); // output I am 23 years old
// console.log('23' + '10' + 3); // output 23103

// // the - and * sign convert strings to numbers, the other way around!!

// console.log('23' - '10' - 3); // output 10
// console.log('23' / '2'); // output 11.5

// // 5 falsy values: 0, '', null, undefined, Notation

// console.log(Boolean(0)); // output false
// console.log(Boolean(undefined)); // output false
// console.log(Boolean('Dijana')); // true
// console.log(Boolean({})); // true

// // any other value is true when converted to boolean

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isWilling = false;

// if (hasDriversLicense && hasGoodVision && !isWilling) {
//     console.log("Sara is able to drive")
// } else {
//     console.log("someone else should drive...")
// };

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// template literal plus ternary operator
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2); // result 46, 46

// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // get the index of the last element in the array
// const friends = ['Michael', 'Steven', 'Peter'];
// //add elements
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));


// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        return 2037 - this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year-old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.getSummary());
// console.log(jonas);
// console.log(jonas.calcAge());
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas?');


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between age, lastName, job and friends')
// };

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend's name is ${jonas.friends[0]}`);



// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}💪`)
// }


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Jordan', 'Peter'],
];

// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//     //reading from jonasarray
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     //filling types array
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// fill an empty array

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);


// continue and break
// console.log('---ONLY STRINGS---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

const jonas1 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Jordan', 'Peter'],
];

// 0,1,..,4
// 4,3...,0

// looping backwards

// for (let i = jonas1.length - 1; i >= 0; i--) {
//     console.log(i, jonas1[i]);
// };

// // looping forwards

// for (let j = 0; j < jonas1.length; j++) {
//     console.log(j, jonas1[j]);
// }

// for (let i = 1; i < 4; i++) {
//     console.log(`---Starting exercise ${i}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// };

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end`);
};


