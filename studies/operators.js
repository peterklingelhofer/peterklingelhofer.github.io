/*
 * OPERATORS:
 *
 * 0. Operators are symbols between values that allow operations
 * such as addition, subtraction, multiplication, division and more.
 *
 */
 
// 1. Assignment operators //

/*
 * The most basic assignment operator is =, which assigns the value of
 * the right operand to its left operand.
 */
 
// Assignment
 
var a;
var b;
a = b;

// Addition assignment
a = 1;
b = 2;
console.log(a += b)  // => prints 3; shorthand for a = a + b

// Subtraction assignment
console.log(a -= b)  // => prints 1; shorthnad for a = a - b

// Multiplication assignment
console.log(a *= b)  // => prints 2; shorthand for a = a * b

// Division assignment
console.log(a /= b)  // => prints 1; shorthand for a = a / b

// Remainder assignment
a = 4;
console.log(a %= b)  // => prints 0; shorthand for a = a % b

// Exponential assignment
a = 4;
console.log(a **= b) // => prints 16; shorthand for a = a ** b

// 2. Arithmetic operators //
// Addition operator
a = 1;
b = 2;
console.log(a + b) // => prints 3

// Subtraction operator
console.log(a - b) // => prints -1

// Multiplication operator
console.log(a * b) // => prints 2

// Division operator
console.log(a / b) // => prints 0.5

// Remainder operator
console.log(a % b) // => prints 1

// Exponential operator
a = 3;
console.log(a ** b) // => prints 9

// 3. Comparison operators //

/*
 * A strict comparison (===) is only true if the operands are
 * of the same type and their contents match. Abstract comparisons
 * (==) convert the operands to the same data type prior to
 * making the comparison. With respect to relational abstract
 * comparisons, (>=), the operands are first converted to primitives,
 * then to the same type, prior to comparison. Two distinct objects are never
 * equal for strict or abstract comparisons.
 */
 
// Strict and abstract Equality operators (===, ==)
console.log(4 == 4); // prints=> true

console.log('4' == 4); // prints=> true

console.log(4 === 4); // prints=> true

console.log('4' === 4); // prints=> false

// Inequality operators (!=)

/*
 * The inequality operator, if the operands are not equal, returns true. If the
 * operands aren't of the same data type, an attempt will be made to convert
 * the operands to an appropriate type for comparison.
 */

console.log(1 != 4); // prints=> true
console.log(2 != '2'); // prints=> false
console.log(0 != "0"); // prints=> false
console.log(8 != true); // prints=> false
console.log(5 != false); // prints=> false

// Strict inequality operators (!==)
console.log(5 !== '5') // prints=> true
console.log(2 !== 1) // prints=> true

// Relational operators

/*
 * Prior to comparison, these operators coerce their operands to primitives.
 * Strings are compared using lexicographic order, else numbers are compared.
 * Comparisons against NaN are always false.
 */

// Greater than operator (>)

console.log(5 > 1); // prints=> true;
console.log(5 > 5); // prints=> false;
console.log(5 > 7); // prints=> false;

/*
 * The greater than operator returns true if left operand greater than right.
 */
 
// Greater than or equal to operator (>=)
console.log(5 >= 1); // prints=> true;
console.log(5 >= 5); // prints=> true;
console.log(5 >= 7); // prints=> false;

/*
 * The greater than or equal to operator returns true if left operand greater 
 * than or equal to the right.
 */

// Less than operator (<)
console.log(5 < 1); // prints=> false;
console.log(5 < 5); // prints=> false;
console.log(5 < 7); // prints=> true;

/*
 * The less than operator returns true if left operand less than right.
 */

// Less than or equal to operator (<=)
console.log(5 <= 1); // prints=> false;
console.log(5 <= 5); // prints=> false;
console.log(5 <= 7); // prints=> true;

/*
 * The less than or equal to operator returns true if left operand less 
 * than or equal to the right.
 */

// 4. Logical operators //

/*
 * Logical operators, when used with boolean (logical) values return a boolean
 * value. AND (&&) and OR (||) operators however return the value of one of the operands,
 * in that when these operators are used with non-boolean values, they will
 * return a non-boolean value.
 */

// Logical AND (&&) operator
console.log(true && true); // prints=> true
console.log(true && false); // prints=> false
console.log((3 === 5) && false); // prints=> false
console.log('grapes' && 'apples'); // prints=> 'apples'
console.log(false && 'grapes'); // prints=> false
console.log('' && false); // prints=> ""
console.log(false && ''); // prints=> false


// Logical OR (||) operator
console.log(true || true); // prints=> true
console.log(true || false); // prints=> true
console.log((3 === 5) || false); // prints=> false
console.log('grapes' || 'apples'); // prints=> 'grapes'
console.log(false || 'grapes'); // prints=> 'grapes'
console.log('' || false); // prints=> false
console.log(false || ''); // prints=> ""

// Operator precedence
true || false && false // returns true, because && is executed first
(true || false) && false // returns false, because operator precedence can't apply

/*
 * With respect to operator precedence, the && operator is executed prior to the
 * || operator.
 */

// 5. Unary operators (!, typeOf, -) //

/*
 * Unary operators have only one operand. They cannot be overridden, and
 * therefore, there functionality is guaranteed.
 */

// Logical NOT (!) operator
console.log(!true); // prints=> false
console.log(!false); // prints=> true
console.log(!''); // prints=> true
console.log(!'cat'); // prints=> false

/*
 * The logical NOT (!) performs the logical negation on an expression
 */
 
// typeOf operator

console.log(typeof 4.4) // => prints 'number'
console.log(typeof Infinity) // => prints 'number'
console.log(typeof NaN) // => prints 'number'

console.log(typeof '') // => prints 'string'
console.log(typeof 'dsfd') // => prints 'string'
console.log(typeof (typeof 4)) // => prints 'string'

console.log(typeof true) // => prints 'boolean'
console.log(typeof false) // => prints 'boolean'

console.log(typeof undefined) // => prints 'undefined'
console.log(typeof declaredYetUndefinedVariable) // => prints 'undefined'
console.log(typeof undeclaredVariable) // => prints 'undefined'

console.log(typeof function(){}) // => prints 'function'

console.log(typeof null) // => prints 'object'
console.log(typeof [1, 2, 3]) // => prints 'object'

/*
 * The typeof operator returns the data type of its operand as a string.
 */

// Unary negation (-) operator

console.log(-8); // => prints -8
console.log(-'8'); // => prints -8
console.log(-true); // => prints -1
console.log(-false); // => prints -0
console.log(-null); // => prints -0
console.log(-undefined); // => prints NaN
console.log(-NaN); // => prints NaN
console.log(-'string'); // => prints NaN
console.log(-{}); // => prints NaN
console.log(-function(){}); // => prints NaN

/*
 * The unary negation operator precedes its operand. It tries to convert
 * its operand into a number, and then negates it.
 */


// 6. Ternary operator (a ? b : c) (condition ? exprIfTrue : exprIfFalse) //

var age = 50;
var barAccess;
console.log(barAccess = (age >= 21) ? "Welcome to the Bar!" : "Sorry!");
console.log(barAccess); // "Welcome to the Bar!"

/*
 * The ternary operator takes three operands: a condition followed by a question
 * mark (?), then an expression to execute if the condition is truthy, followed
 * by a colon (:), and the expression to execute if the condition is falsy.
 * This is frequently used as a shortcut for an if statement.
 */