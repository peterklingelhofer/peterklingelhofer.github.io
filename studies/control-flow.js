/*
 * CONTROL FLOW:
 *
 * 0. Conditional statements are a set of commands that execute if a specified
 * condition is true. These include if, else-if, else, and switch.
 */
 
// 1. if //

var a = 4;
var b = 3;
if (a > b) {
    console.log("a is greater than b!");
} // => prints a is greater than b!

/*
 * If statements use 'if' to check a specific condition, running the code in 
 * the curly braces '{}' only if a condition is true. The condition is any
 * boolean value (true/false) or any boolean expression (1 === 1). The condition
 * being checked must be inside parantheses '()'.
 */

// 2. else-if //
var a = 4;
var b = 5;
if (a > b) {
    console.log("a is greater than b!");
} else if (b > a) {
    console.log("b is greater than a!");
} // => prints b is greater than a!

/*
 * Else-if statements use 'else-if' to check for a specific condition, running
 * the code in the curly braces '{}' only if a condition is true, but also,
 * only if the previous statement is false. As with if statements, the condition
 * is any boolean value (true/false) or any boolean expression (1 === 1).
 */

// 3. else //
var a = 5;
var b = 5;
if (a > b) {
    console.log("a is greater than b!");
} else if (b > a) {
    console.log("b is greater than a!");
} else {
    console.log("a and b are equal!");
} // => prints a and b are equal!

/*
 * Else statements use 'else' to run a block of code if all other conditions are
 * false, running the block of code in the curly braces ({}). All other 
 * conditions being false, this is the default condition, so there is no 
 * condition to check for. 
 */
 
// 4. switch //
var fruit = 'apple';
switch (fruit) {
  case 'satsuma':
    console.log("Satsumas are $0.49 each.");
    break;
  case 'orange':
    console.log("Oranges are $0.46 each.");
    break;
  default:
    console.log("Sorry, we're out of " + fruit + 's.');
    break;
} // => prints Sorry, we're out of apples.

/*
 * Switch statements allow a program to evaluate an expression, attempting
 * to match the expression's value to a 'case' label. If a match is found,
 * the program executes the associated statement.
 */

