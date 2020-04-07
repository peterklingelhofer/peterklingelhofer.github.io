/*
 * FUNCTIONS:
 *
 * 0. Functions are reusable blocks of code that accept inputs, process those 
 * inputs, and returns a new data value.
 */
 
// 1. The two phases to using functions: //
// First we must ___? 

/*
 * First we must declare a function. A function declaration involves four parts:
 * i.   Name
 * ii.  Parameter(s): input(s)
 * iii. Function body: where the code runs
 * iv.  Return statement: output
 * function name(parameter) {
 *   <function body>
 *   <function body>
 *   return statement
 * }
 */
function add (a, b){
  return a + b;
}



// Next we can execute (or two other words for executing a function?) a function by?
/*
 * Calling or invoking a function is done as follows:
 * nameOfFunction(arguments)
 */

var result = add(add(5,5), add(4,4));
console.log(result); // => prints 18

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //

/*
 * A functions parameters are the placeholders for the arguments inputted when
 * a function is called.
 */

function add (a, b){ // This function's parameters are a and b
  return a + b;
}

add(1, 2); // This add function is being passed arguments 1 and 2.

// 3. What’s the syntax for a NAMED function? //
/*
 * function name(parameter) {
 *   <function body>
 *   <function body>
 *   return statement
 * }
 */

function add (a, b){ // This function's parameters are a and b
  return a + b;
}

// The above function is named 'add'.

// 4. How do we assign a function to a variable? //
function add (a, b){ // This function's parameters are a and b
  return a + b;
}

var x = add;
console.log(add(1, 2)); // => prints 3
console.log(x(1, 2)); // => prints 3

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
//    How do we specify inputs, and how do we specify outputs? //

function add (a, b){ // This function's parameters are a and b, the inputs
  return a + b;      // the return value specifies the outputs
}

console.log(add(1, 2)); // => prints (output is) 3

// 6. Scope: Functions can see and modify variables in parent or global scopes. 
//    The inverse is NOT true. //

/*
 * JavaScript has function scope. Each function creates a new scope.
 * Scope determines the accessibility of these variables. Variables defined
 * inside a function are not accessible from outside the function.
 */
 
// Variables declared within a function become local to the function.
function myFunction() {
    var localVariable = 1;
    // code here can utilize localVariable
}
// code here cannot utilize localVariable

// Variables declared outside a function are global scope
var globalVariable = 2;
function mySecondFunction() {
    // code here can utilize globalVariable
}
// code here can utilize globalVariable

// All scripts and functions on a page can access global scope variables


// 7. Closures: Functions form closures around the data they house. If an object 
//    returned from the Function and is held in memory somewhere (referenced), 
//    that closure stays ALIVE, and data can continue to exist in these closures!

/*
 * Whenever a function is created within another function, it is a closure.
 * The inner function is the closure. This closure is typically returned, so
 * you can use the outer function's variables later.
 */

var globalVariable = 4;
function noClosureFunction() {
    var functionVar = 3; // No closure
    return functionVar;
}
function closureFunction() {
    var functionVar = 3 + globalVariable; // Closure,
    return functionVar;
}

/* In the closureFunction(), variables from the PARENT scope are used. This is 
 * an example of closure.
 */