'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
//Constructor function
const tiago = new Person('Santi', 1993);
console.log(tiago);

// 1). New {} is created.
// 2). Function called, this = {}
// 3). {} linked to prototype
// 4). function automatically return {}

const matilda = new Person('Matilda', 2003);
const jack = new Person('Jack', 2009);
console.log(matilda, jack);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// prototypal inheritance / delegation
tiago.calcAge();
matilda.calcAge();
console.log(tiago.__proto__);
console.log(tiago.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(tiago));
console.log(Person.prototype.isPrototypeOf(Person));

//We can set properties on the prototype, not just methods

Person.prototype.species = 'Homo Sapiens';
console.log(tiago.__proto__);
//Object.prototype (top of the prorotype chain)
console.log(tiago.__proto__.__proto__);
console.log(tiago.__proto__.__proto__.__proto__); //This is null

const arr = [4, 8, 3, 6, 4]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
