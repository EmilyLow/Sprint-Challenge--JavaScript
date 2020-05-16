// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
There are two reasons nestedFunction() can access internal. The first is simply that internal is within nestedFunction()'s scope. As functions can look outward, but not inward, nestedFunction() is able to access the variables of myFunction (which it is inside). Thus, the 'internal' variable is within the scope of nestedFunction().

The second is that, as a closure, nestedFunction stores a list of its original scope. So, as nestedFunction() can access/see internal when it is created, it an also access/use internal when called later.

*/

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let counter = 0;
  for(let i = 1; i <= number; i++) {
    counter += i;
  }
  return counter;
}
console.log(summation(4));