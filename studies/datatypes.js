/*
 * DATATYPES:
 *
 * 0. Data are stored in different ways and values. Different types of
 * data hold information in different forms and in different ways. A
 * variable can contain any data. So a variable can have a number at
 * one time and can have a string at another time. This is because
 * Javascript is dynamically typed, in that while there are data types,
 * but variables are not permanently bound to any of them.
 *
 */

// 1. number //
let n = 88;
n = 44.22;

/*
 * The number datatype represents integers and floating point numbers.
 */
 
// 2. string //

var string = 'tHiS iS a StRiNg';
var string2 = "double quotes also work";
var string3 = `we can embed strings in strings like this: ${string}`;

/* 
 * Strings in Javascript must be surrounded by quotes. Double quotes
 * and single quotes are interchangeable. When a string is assigned to a variable,
 * that variable contains the value itself, because a string is an example of a 
 * simple or primitive value. 
 */

var str = "Hello friendly folks!";
console.log(str.charAt(0)); // => prints H
console.log(str.charAt(4)); // => prints o

/*
 To access characters individually, .charAt(i)
 * can be used, with i indicating the index. The first character in the string is 
 * index 0, and counts up by 1 with each subsequent character.
 */

var plant = 'cactus';
console.log( `Water the ${plant}!` ); // => prints Water the cactus!
/* 
 * Backtick quotes are used to embed expressions and variables into 
 * a string by wrapping them inside ${string or expression}.
 */
    
// 3. boolean //

var good = true; // => prints yes, it's good
var bad = false; // => prints no, it's not bad

/*
 * The boolean datatype only has two values, true and false.
 * Like a switch, its commonly used to store yes/no values or 
 * correct/incorrect. True for yes/correct, false for no/incorrect.
 */
 
console.log(2 > 1); // => prints true
console.log(2 < 1); // => prints false

// 4. array //

var trees = ['satsuma', 'olive'];
console.log(trees); // => prints ['satsuma', 'olive']
console.log(trees.length); // => prints 2

/*
 * Arrays are list-like objects. The array's length is not fixed.
 * The type of elements within the array are not fixed. Arrays use
 * integers as element indexes.
 */
 
console.log(trees[1]); // => prints olive
console.log(trees.length); // => prints 2

/*
 * Indexes in arrays start at 0, and allow access for the data in
 * that index. Running .length on an array yields the total amount of
 * elements that make up the array.
 */

// 5. object //

/*
 * Objects can be seen as a collection of properties. Property values
 * can be values of any type, which includes other objects. This allows
 * for the construction of complex data structures. Properties are
 * defined by using key values, which must be a string or symbol value.
 * Keys and their key values are usually separated by a semicolon
 * as "key: value" pairs. Keys are sometimes referred to as "property name".
 */

var contact1 = {}; // creates a new object literal
var contact1 = {
    name: "Mary",
    age: 62
};

/*
 * The above object is named 'contact'. It's first property has the name "name"
 * and the value "John". The second property has the name "age" and the value 
 * 62.
 */
 
console.log(contact1.age); // => prints 62
delete contact1.age; // => deletes the age property
/*
 * Property values are accessible with dot notation.
 */

contact1["likes fishing"] = true;
console.log(contact1["likes fishing"]); // => prints true

/*
 * Square brackets may be used for multiword properties, as dot access will not
 * work.
 */

console.log("age" in contact1); // => prints true (as contact.age exists)
console.log("favorite book" in contact1); // => prints false

/*
 * We can determine whether an object has a property or not with "key" in object.
 */

// 6. function //

/*
 * A function is a code snippet that can be called by itself, other code, or
 * a variable that refers to the function. When called, arguments are passed to
 * the function as inputs. The function optionally can return a value.
 * Functions in are also objects, technically.
 */

function makeContact(name, age) {   // function declaration
    return {                        // function may return a value
        name: name,
        age: age,
    };
}

let contact2 = makeContact("Alex", 47);
console.log(contact2.name) // => prints Alex

/*
 * An inner function is a function inside of another function. An outer function
 * is a function that contains another function.
 */

function addCubes(x, y) {
    function cube(a) {
        return a * a * a;
    }
    return cube(x) + cube(y);
};

console.log(addCubes(2, 1)); // => prints 9

/*
 * A recursive function is a function that calls itself.
 */

function upCount(n) {
    console.log(n);

    let nextNumber = n + 1;

    if (nextNumber < 5) {
        upCount(nextNumber);
    }
}
console.log(upCount(0)); // => prints 0 1 2 3 4
 
// 7. undefined //

var z;
console.log(z); // => prints undefined

/*
 * The meaning of undefined is "value not assigned". If a variable
 * is declared but not assigned, then its value is undefined.
 */


// 8. null //

var variable1 = null;

/*
 * Null is a special value that is a separate datatype, and can
 * only contain a value of null. It is a value that represents
 * nothing, empty, or value unknown.
 */

// 9. NaN //

console.log('this is a string' / 4); // => prints NaN

/* 
 * NaN is the result of an undefined or incorrect mathematical 
 * operation, it is a computational error.
 */
 
// 10. Infinity and -Infinity (Google them if you don't know!) //

/*
 * Outside of regular numbers, there are special numeric values,
 * which include Infinity, -Infinity.
 */

console.log(1 / 0); // => prints Infinity

/* 
 * Infinity represents mathematical Infinity, a special value greater
 * than any number.
 */
 
// 11. What is the difference between primitive/simple and complex data types? //

/*
 * Simple/primitive data types are data that is not an object and has no methods.
 * Simple/primitive data types include strings, numbers, booleans, undefined, and
 * symbols. All primitives are immutable, they cannot be altered. The variable
 * may be reassigned a new value, but that existing value may not be changed in
 * ways that functions, objects, and arrays may be altered.
 *
 * Complex data types include objects, arrays, and functions.
 */
 
var sour = "FLOWER";
console.log(sour);               // => prints FLOWER
sour.toLowerCase();
console.log(sour);               // => prints FLOWER
// Using a string (simple/primitive) fails to change the string

var dirt = [];
console.log(dirt);               // => prints []
dirt.push("soil");
console.log(dirt);               // => prints ["soil"]
// Using an array allows changes to be applied

sour = sour.toLowerCase();       // => prints flower
// Assignment gives the primitive a new (not a changed) value
 

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? // 

/*
 * When a primitive value is assigned to a variable,
 * that variable containts the primitive value.
 *
 * Variables assigned non-primitive values are given a
 * reference to that value, pointing to the object's
 * location in memory. The variables don't actually
 * contain the value.
 *
 */