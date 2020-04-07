// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i < 101; i++) { //starts at 1, goes til 100, +1 each time
    if (i%15 == 0) { // checks if remainder of dividing by 15 (3*5) is 0
        console.log('FizzBuzz'); // prints FizzBuzz if 15 is divisible
    } else if (i%3 == 0) { // checks if remainder of dividing by 3 is 0
        console.log('Fizz'); // prints Fizz if 3 divisible
    } else if (i%5 == 0) { // checks if remainder of dividing by 5 is 0
        console.log('Buzz'); // prints Buzz if 5 divisible
    } else { // if no special conditions are true let it ride as is
        console.log(i); // print the current iteration b/c its not divisible by 3 or 5 cleanly
    }


    // YOUR CODE GOES ABOVE HERE //
}}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}