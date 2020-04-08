/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
/*
 * We initialize a variable by assigning it a value.
 */
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
/*
 * We can change the value of the variable later by re-assigning it.
 */
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var //
/*
 * Variables can be declared anywhere, are available anywhere in scope, and can 
 * be assigned before or after declaration. They have no value until they are
 * assigned. The var statement declares a variable, optionally initializing it to a value.
 */
var myFruit = 'Banana';
console.log(myFruit); // prints => Banana



// 5. let //
/* 
 * The let statement declares a block scope local variable, which can be reassigned.
 * Let however cannot be re-declared. It is hoisted to the top of the scope, but
 * it is not available until the interpreter reaches the line the variable is declared.
 */
let a = 1;

if (a === 1) {
  let a = 2;

  console.log(a);
  // prints => 2
}

console.log(a);
// prints => 1
 
// 6. const //
/*
 * Constants cannot be changed through reassignment,
 * and cannot be redeclared. Constants, like let-defined
 * variables are block-scoped.
*/
const number = 20;
// number = 9; // re-assigning a constant variable results in an error
// console.log(number); // prints => TypeError: invalid assignment to const

// 7. hoisting //
/*
 * Hoisting pertains to variable declarations and function declarations,
 * taking them to the top of their scope. With respect to variables, only the
 * name is hoisted, whereas with functions, the name and the body are hoisted.
 * This process occurs at runtime.
 * This allows you to use a function before you declare it in your code.
*/

vegetableName("broccoli");

function vegetableName(name) {
  console.log("My favorite vegetable is " + name);
} // prints => 'My favorite vegetable is broccoli'
