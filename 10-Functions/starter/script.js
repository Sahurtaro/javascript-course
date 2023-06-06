// 'use strict';
// //Default parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);

//   bookings.push(booking);
// };

// // createBooking('LH123');
// // createBooking('LH123', 5, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', undefined, 1000);
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 9875347845,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr' + passenger.name;
//   if (passenger.passport === 9875347845) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flightNum, jonas);

// const oneWord=function(str){
//   return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord=function(str){
//   const [first,...others]= str.split(' ')
//   return [first.toUpperCase(),...others].join(' ')
// }

// //Higher-order function
// const transformer=function(str,fn){
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`)
//   console.log(`Transformed by: ${fn.name}`)
// }

// transformer('JavaScript is the best',upperFirstWord)

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// //Challenge

// greetArr('Hey')('Tiago');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(22, 'Tiago Rodríguez');
// lufthansa.book(547, 'Tomás Domínguez');

// const eurowings = {
//   airline: 'eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work!
// // book(26,'Sarah Williams')

// // Call method
// book.call(eurowings, 24, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'María Cúper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 896, 'Carlos Duarte');

// // Apply method

// const flightData = [564, 'Jorge Bosso'];
// book.apply(swiss, flightData);

// // Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(789, 'Leonel Massi');

// // Todos los argumentos que se pasen, no solo el this, van a quedar ligados permanentemente a la función
// const bookEW23 = book.bind(eurowings, 23); // => partial application
// bookEW23('Sebastián Rojas');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application => We can preset parameters
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTax2(0.3);
// console.log(addVAT2(400));

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.options.length &&
//       this.answers[answer]++;
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.anwers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//IIFE

// const runOnce = function () {
//   console.log('This function will run once');
// };

// (function () {
//   console.log('This function will run once');
// })();

// (() => console.log('This function also will run once and never again'))();

// Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
