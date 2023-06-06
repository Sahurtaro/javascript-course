'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '💢' : ''}${type
    .replaceAll('_', ' ')
    .trimStart()} => from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(46);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// //String methods
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// //Slice
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// //Extract the first word
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   //B and E are the middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else {
//     console.log('You got lucky!');
//   }
// };

// checkMiddleSeat('11A');
// checkMiddleSeat('12B');
// checkMiddleSeat('11A');

const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix capitalization in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerFirst = passengerLower.slice(0, 1).toUpperCase();
// const passengerSecond = passengerLower.slice(1);
// console.log(`${passengerFirst}${passengerSecond}`);
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io ';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

//Replacing
const priceGB = '288,97L';
const priceUS = priceGB.replace(',', '.').replace('L', '$');
// console.log(priceGB, priceUS);

const announcement = 'All passengers come to board door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //only replace the first ocurrence
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); //with regular expression

//Booleans: includes, startsWith and endsWith
const plane = 'A320neo';
// console.log(plane.includes('320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knifes') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome onboard!');
  }
};

// checkBaggage('Knife');
// checkBaggage('food');
// checkBaggage('gun');

//Split and Join

// console.log('a+very+nice+string'.split('+'));
// console.log('Santiago Rodríguez'.split(' '));

const [firstName, lastName] = 'Santiago Rodríguez'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
};

// capitalizeName('jessica ann smith davis');
// capitalizeName('sebastián rojas');

//Padding
const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskingCreditCard = function (number) {
  const str = number + ''; //convert the number into a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskingCreditCard(4200627848));
// console.log(maskingCreditCard(1144066482));
// console.log(maskingCreditCard(11440664821897858797));

//Repeat
const message2 = 'Bad weather... All departures delayed...';
// console.log(message2.repeat(4));

const camelCase = function (str) {
  const cleaned = str.trim().toLowerCase();
  const sep = cleaned.split('_');
  const upper = sep[1][0].toUpperCase() + sep[1].slice(1);
  const final = sep[0] + upper;
  console.log(final);
};

// camelCase('camel_case');
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().toLowerCase().split('_');
//     // console.log(row, first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });
