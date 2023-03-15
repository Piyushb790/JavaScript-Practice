//Let, Const and block scoping

var a = 2;
{
  let a = 3;
  console.log(a); //3
  // let a = 5; // TypeError: Identifier "a" has already been declared
}
console.log(a); // 2

{
  const b = 5;
  //  b = 10; //TypeError: Assignment to constant variable

  // Object's and Array's contents may change, only the re-assignment of the variable is prevented.

  const arr = [5, 6];
  arr.push(7);
  console.log(arr); //[5,6,7]
  // arr = 10; //TypeError Assignment to constant variable

  arr[0] = 3; //value is mutable
  console.log(arr); // [3,6,7]
}

// Both let and const are hoisted, but cannot be accessed before their declaration, because of Temporal Dead Zone

// ! ARROW FUNCTION

// ? classical function experession

function addition(a, b) {
  return a + b;
}
let result = addition(10, 4);
console.log(result);

//? Implementation with arrow function

const additionArrow = (a, b) => a + b;

let result2 = additionArrow(1, 7);
console.log(result2);

//? with single arguemnent no Parenthesis required

const add = (a) => 5 + a;
let result3 = add(15);
console.log(result3);

//? arrow function with curly braces

const arr1 = ["apple", "mango", "banana"];

const breakfast = arr1.map((fruits) => {
  return fruits + "s";
});
console.log(breakfast);

//^ Arrow functions behavior with this keyword varies from that of normal functions. Each function in JavaScript defines its own this context but arrow functions capture the this value of the nearest enclosing context

function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 6000);
}

let d = new Person();
console.log(d);

function Person1() {
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    self.age++;
  }, 1000);
}
let p = new Person1();
console.log(p);

// Nearest Enclosing function

function Person3() {
  this.age = 0;

  setInterval(() => {
    setTimeout(() => {
      this.age++;
    }, 1000);
  }, 1000);
}
let g = new Person3();
console.log(g);

//! Default funtion Parameter

const getFinalPrice = (price, tax = 0.7) => price + price * tax;
console.log(getFinalPrice(10));

//! Spread or REST Operator

const makeToast = (breadType, topping1, topping2) => {
  return ` I had ${breadType} toast with ${topping1} and ${topping2}`;
};

//~ When used with any iterable, it acts as to "spread" it into individual elements:

const ingrediants = ["wheat", "butter", "peanut butter"];

console.log(makeToast(...ingrediants));

const compostion = ["meat", "redmeat", "camelMilk"];
console.log(makeToast(...compostion));

//~ Spread is also for shaping a new object from other object(s):

const defaults = { avatar: "./a.png", active: true };
// const userData = { username: "foo", avatar: "./b.png" };

console.log({ created: "2017-12-31", ...defaults });

//~ New arrays can also be shaped expressively:

const arr3 = [1, 2, 3];
const arr4 = [7, 8, 9];
console.log(...arr3, 4, 5, 6, ...arr4);

//~ The other common usage of ... is gathering all arguements together into an array. This is reffered as "rest operator"

function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5, 8);

//! Object Literal Extension

function getCar(make, model, value) {
  return {
    // with property value shorthand syantx, you can omit the property value if key matches variable name
    make, //same as make: make
    model, //same as model: model
    value, //same as value: value

    //computed values now work with
    //object literals

    ["sexy " + model]: true,

    depreciate() {
      this.value -= 2500;
    },
  };
}

let car = getCar("kia", "seltos", 40000);
console.log(car);

//! OCTAL and Binary Literals

//^ ES6 has new support for octal and binary literals. Prependending a number with 0o or 0O would convert it into octal value. Have a look at the following code:

let oValue = 0o10;
console.log(oValue);

let bValue = 0b10;
console.log(bValue);

//! Array and Object Destructing

//^ Destructing helps in avoiding the need for temp variables when dealing with object and arrays

function foo1() {
  return [1, 2, 3];
}

let arr6 = foo1();
console.log(arr6); //^ [1, 2, 3]

let [a1, b1, c1] = foo1();
console.log(a1, b1, c1); //^ 1 2 3

function getCar2() {
  return {
    company: "Tesla",
    modelno: "X",
    metadata: {
      vin: "123abc",
      miles: "12000",
    },
  };
}

// const { company, modelno } = getCar2();
// console.log(company, modelno);

const {
  modelno,
  metadata: { miles, vin },
} = getCar2();
console.log(modelno, miles, vin);

//! Super in Objects

//? Es6 allows to use super method in (classless) objects with prototypes. Following is simple example:

const parent = {
  foo2() {
    console.log("hello from the parent");
  },
};

const child = {
  foo2() {
    super.foo2();
    console.log("Hello from the child");
  },
};

Object.setPrototypeOf(child, parent);
child.foo2();

//! Template Literals and Delimiters

let user = "Kevin";
console.log(`Hi ${user}`);

//! for...of vs for...in
//? for of iterates over iterable objects such as array

const nickname = ["dafli", "Piyushi", "punky"];
nickname.size = 3;

for (let naklinam of nickname) {
  console.log(naklinam);
}

//! for in iterates over all enumerable properties of an object

const nicknames = ["balli", "sid", "sm"];
nicknames.size = 3;

console.log(nicknames);

for (let nickname in nicknames) {
  console.log(nickname);
}

//! Map and WeakMap

//? Es6 introduces new set of data structures called MAP and WeakMap. Now, we actually use maps in javascript all the time. In fact every object can be considered as a Map.

//? An object is made of keys and values, whereas in Map, any value (both objects and primitive values) may be used as either a key or a value. Have a look at this piece of code.

const myMap = new Map();

const keyString = "a string",
  keyObj = {},
  keyFunc = () => {};

//? setting the values

myMap.set(keyString, "value associated with a string");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size;

//?getting the values

console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

//! set and weakSet

//^ set objects are collections of unique values. Duplicate values are ignored, as the collection must have all unique values. The values can be imperative types or object references

const mySet = new Set([1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8]);
console.log(mySet.has(1));
mySet.add("strings");
mySet.add({ a: 1, b: 2 });
console.log(mySet);

//^ You can iterate over a set by insertion order using either the forEach method or the for ...of loop.

mySet.forEach((items) => {
  console.log(items);
});

for (let obj of mySet) {
  console.log(obj);
}

//! Classes in ES6

//^ ES6 introduces new class syntax. One thing to note here is that ES6 class is not a new object-oriented inheritence model. They just serve as syntactical sugar over javascript existing prototype-based inheritence.

//^ One way to look at a class in ES6 is just a new syntax to work with prototypes and constructor function that we'd use in ES5.

//^ Functions defined using the static keyword implement static/class functions on the class.

class Task {
  constructor() {
    console.log("task instantiated");
  }

  showId() {
    console.log(23);
  }

  static loadAll() {
    console.log("Loading all tasks");
  }
}

console.log(typeof Task);
const task = new Task();
task.showId();
Task.loadAll();

//! Symbol

//* A symbol is a unique and immutable data type introduced in ES6. The purpose of symbol is to generate a unique identifier but you can never get any access to that identifier.

const sym = Symbol("some optional description");
console.log(typeof sym);

const o = {
  val: 10,
  [Symbol("random")]: "I'm a symbol",
};

console.log(Object.getOwnPropertyNames(o));

//! Promises

//* A promise is an object that is waiting for an asynchronous operation to be complete, and when that operation completes, the promise is either fulfilled(resolved) or rejected.

//* The standard way to create a promise is by using new Promise() constructor which accepts a handler that is given two function as parameters. The first handler (typically named resolve) is a function to call with the future value when it's ready; and the second handler (typically named reject) is a function to call to reject the promise if it can't resolve the future value.

const pq = new Promise((resolve, reject) => {
  if (2 % 2 == 0) {
    resolve(true);
  } else {
    reject("Not zero");
  }
});

console.log(pq);

//* Every Promise has a method named then which takes a pair of callbacks. The first callback is called if the promise is resolved, while the second is called if the promise is rejected.

pq.then(
  (val) => console.log("Promise Resolved", val),
  (err) => console.log("Promise is rejected", err)
);

//* Returning a value from then callbacks will pass the value to the next callback.

const hello = new Promise((resolve, reject) => {
  if (true === false) {
    resolve("hello");
  } else {
    reject("yeh lo");
  }
});

hello
  .then((str) => `${str} world`)
  .then((err) => `${err} world`)
  .then((str) => `${str}!`)
  .then((str) => console.log(str));
