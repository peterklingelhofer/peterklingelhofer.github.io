// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * Its saying that our outer function is going to be given either a string or a 
 * number.
 * Within our outer function, we need to return a function that will also take an 
 * input string or number
 * Withing that inner function, we need to test wether the outer value is greater 
 * than the inner function's input value
 * ParseInt()?
 */
// declare function createGreaterThanFilter with parameter base
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
// return function greaterThan with parameter arg
     return function greaterThan(arg) {
// if arg is a string
         if (typeof(arg) === 'string') {
// return if arg is greater than base
        return arg > base;
// else if arg is a number
         } else if (typeof(arg) === 'number') {
// return if arg is greater than base
        return arg > base;
         }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
// declare function createLessThanFilter with parameter base
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
// return function lessThan with parameter arg
     return function lessThan(arg) {
// if arg is a string
         if (typeof(arg) === 'string') {
// return arg less than base
        return arg < base;
// else if arg is a number
         } else if (typeof(arg) === 'number') {
// return arg less than base
        return arg < base;
         }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
// declare function createStartsWithFilter with parameter startsWith
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
// return function startsWithFilter with parameter value
    return function startsWithFilter(value) {
// if lower case startsWith same as first digit of value lower case
        if (startsWith.toLowerCase() === value[0].toLowerCase()) {
// return true
            return true;
// else return false
        } else return false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
// declare function createEndsWithFilter with parameter startsWith
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
// return function endsWithFilter with parameter value
    return function endsWithFilter(value) {
// if lower case endsWith same as first digit of value lower case
        if (endsWith.toLowerCase() === value[value.length-1].toLowerCase()) {
// return true
            return true;
// else return false
        } else return false;
    };    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
// declare function modifyStrings with parameters strings and modify
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
// declare variable modifiedStrings, an array
    var modifiedStrings = [];
// for loop, starts 0, ends length of strings, increment +1
    for (let i = 0; i < strings.length; i++) {
// push modified strings to array variable
    modifiedStrings.push(modify(strings[i]));
    }
// return array
    return modifiedStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 1. Create a for loop which iterates through each element in the 'strings' array.
 * 2. Set up a conditional within the for loop which subjects each element to the given function: !test(strings[i]) (we use the '!' to mean, roughly, "if NOT...", then do this: [code...]
 * 3. Set 'return false' if any show up as false, otherwise return true.
 */

//     // YOUR CODE ABOVE HERE //
// declare function allStringsPass with parameters strings and test
function allStringsPass(strings, test) {
// check each string to see if they pass the test
    if (strings.every(test) === false) {
// if one fails, return false
        return false;
// otherwise
    } else {
// return true
        return true;
    }
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}