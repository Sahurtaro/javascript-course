'use strict';

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never create a method inside of a constructor function
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
//Constructor function
// const tiago = new Person('Santi', 1993);
// console.log(tiago);

// 1). New {} is created.
// 2). Function called, this = {}
// 3). {} linked to prototype
// 4). function automatically return {}

// const matilda = new Person('Matilda', 2003);
// const jack = new Person('Jack', 2009);
// console.log(matilda, jack);

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// // prototypal inheritance / delegation
// tiago.calcAge();
// matilda.calcAge();
// console.log(tiago.__proto__);
// console.log(tiago.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(tiago));
// console.log(Person.prototype.isPrototypeOf(Person));

// //We can set properties on the prototype, not just methods

// Person.prototype.species = 'Homo Sapiens';
// console.log(tiago.__proto__);
// //Object.prototype (top of the prorotype chain)
// console.log(tiago.__proto__.__proto__);
// console.log(tiago.__proto__.__proto__.__proto__); //This is null

// const arr = [4, 8, 3, 6, 4]; // new Array ===[]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

/*

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`This ${this.brand} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`This ${this.brand} is going at ${this.speed} km/h`);
};

const carrito1 = new Car('BMW', 120);
const carrito2 = new Car('Mercedes', 95);
carrito1.accelerate();
carrito1.accelerate();
carrito1.brake();

// ----------------------------------------------------------------------------

//ES6 CLASSES

// class expression

// const PersonCL= class{}

// class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  //instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log('Hey there 🐱‍👤');
  }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2. Class are first-class citizes
//3. Classes are executed in strict-mode

const walter = new PersonCL('Walter White', 1965);

const account = {
  owner: 'Jonas',
  movements: [100, -965, 542, 489, 1200, -650],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //se pasa como una propiedad
account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);
console.log(steven.__proto__ === PersonProto);

const sara = Object.create(PersonProto);
sara.init('Sara', 1979);
sara.calcAge();
console.log(sara);

//Coding challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`This ${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`This ${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    console.log(`This ${this.make} is going at ${this.speed / 1.6} m/h`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS;
ford.accelerate();
ford.accelerate();
ford.speedUS;
*/

///////////////////////////////////////////////////
// Inheritance between classes: constructor functions
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2000, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

//Coding challenge #3
const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`This ${this.brand} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`This ${this.brand} is going at ${this.speed} km/h`);
};

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.brand} is goint at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 90);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();
// tesla.chargeBattery(100);
// tesla.accelerate();

// Inheritance between "Classes": ES6 Classes
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  //instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear); //constructor function of the parent class
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCL('Martha Smith', 2012, 'Biology');
martha.introduce();
martha.calcAge();

// Inheritance between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay Jay', 2009, 'Chemistry');
jay.introduce();
jay.calcAge();
