//! Question 1

function foo() {
  return {
    name: "anil",
  };
}
console.log(foo());

//* Output -> {name: "anil"}

//! Question 2

function foo1() {
  return;
  {
    name: "anil";
  }
}
console.log(foo1());

//* Output -> undefined
//~ Reason according to javascript return is only in one line, we want to execute it we have to make a return statement right after the return keyword.

//! Question 3

console.log(1 + "2" + "2");

//* Output -> 122
//~ Reason becuase 1 is number and other two values are string and by using + operator they are concatinating with each other.

console.log(1 + +"2" + "2");

//* Output -> 32
//~ Reason By using + operator in front of "2" its conversion is happened from string to integer

console.log(1 + +"2" + +"2");

//* Output -> 5
//~ Reason By using + operator in front of "2" its conversion is happened from string to integer

//! Question 4

console.log("A" - "B" + "2");

//* OUtput -> NaN2

//~ Reason we cannot subtract string from string and at the last "2" is present so that NaN2 is printed.

console.log("A" + "B" + "2");

//* Output -> AB2

//~ Reason all are string using + operator they are concatinating with each other.

console.log("A" - "B" + 2);

//* Output -> NAN

//~ Reason we cannot subtract string from string "A" - "B" output is NAN and we cannot add NAN + 2.

//! Question 5

var a = 0;
function b() {
  a = 10;
  return;
  var a = function () {};
}

b();
console.log(a);

//* Output -> 0

//~ Reason var a = 0 is a global variable it does not interfare in the local scope of function b() a = 10 and in function b() we are again definig a variable a and creating a another anonymous function expresssion

var a1 = 0;
function b1() {
  a1 = 10;
  return;
  a1 = function () {};
}

b1();
console.log(a1);

//* Output -> 10

//~ after commenting var a = function(){} we are getting output 10 becuse of hoisting, In we use access function and variable before defining it.

var a2 = 0;
function b2() {
  a2 = 10;
  a2 = function () {};
}

b2();
console.log(a2);

//* Output -> function(){}

//~ after commenting var a = function(){} we are getting output 10 becuse of hoisting, In we use access function and variable before defining it.

//! Question 6

console.log({} === {});

//* Output- false
//~ beause when we compare two variables their values are comparing but in case of object their memory location is comparing that why it's false.

//! Question 6

var a = {};
var b = a;

console.log(a === b);

//* Output- true
//~ beause new object is created and assigned to the variable a. Then the variable "b" is assigned the same object instance that "a" is referencing using the assignement b =a ;

//! Question 7

function test() {
  function foo() {
    return 10;
  }
  return foo();

  function foo() {
    return 100;
  }
}

console.log(test());

//* Output -> 100

//~ Because second function  first overwrite the first function becuase of hoisting and we are returning is early and in memory it is present

//! Question 8

function test2() {
  console.log("test function called");
}
test2();

//* Output -> test function called

test2();
function test2() {
  console.log("test function called");
}

//* Output -> test function called
//~ Reason Hoisting

//^ using variable

// console.log(test3());
// var test3 = function () {
//   console.log("this is test 2 function");
// };

//* Output -> test3 is not a function

//^ using variable

console.log(test4);

var test4 = function () {
  console.log("this is test 2 function");
};

//* Output -> test4 is undefine with parenthesis

//~ Reason //Function declaration is hoisted
//~ Reason //Function expresssion is hoisted when we are doing console.log(test4) it thinks that we a are calling a variable & it thinks we have declared a variable instead of function

//! Question 9

console.log(true + true);

//* Output -> 2

//~becuase value of true is 1

console.log(true - true);

//* Output -> 0

//~becuase value of true is 1

console.log(true - false);

//* Output -> 0

//~becuase value of true is 1 and value of false is 1

let task4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("done");
  });
});

task4
  .finally(() => {
    console.log("finally ho");
  })
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log("err aa gya", err);
    }
  );

//* Output -> finally ho // err aa gya done

let task5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
  });
});

task5
  .finally(() => {
    console.log("finally ho");
  })
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log("err aa gya", err);
    }
  );

//* Output -> finally ho // done

//! Question 9

let data3 = [3, 1, 9, 12, 23, 45, 77];
data3.sort();
console.log(data3);

//* Output -> 1,12,23,3,45,77,9

//~ because whenver we perform sorting it first convert it into string then it give output

//^ To do the actual sorting of number we have do

let data4 = [3, 1, 9, 12, 23, 45, 77];

data4.sort((a, b) => {
  return a - b; // for ascending
  // return b - a; // for descending
});
console.log(data4);

//* Output ->1, 3, 9, 12, 23 ,45 ,77

//~ It is a comparing function which is extracting b from a ;

//~ because whenver we perform sorting it first convert it into string then it give output
