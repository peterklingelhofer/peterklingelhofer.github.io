// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

// declare function isArray with parameter value
function isArray(value) {
// YOUR CODE BELOW HERE //
// test if input is an array
    return Array.isArray(value);
// YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
// declare function isObject with parameter value
function isObject(value) {
    // YOUR CODE BELOW HERE //
// test if array
    if (Array.isArray(value) === true) {
        return false;
// test if undefined
    } else if (typeof(value) === 'undefined') {
        return false;
// test if boolean
    } else if (typeof(value) === 'boolean') {
        return false;
// test if null
    } else if (value === null) {
        return false;
// test if date
    } else if (value instanceof Date) {
        return false;
// test if object
    } else if (typeof(value) === 'object') {
        return true;
// if not, return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
// declare function isCollection with parameter value
function isCollection(value) {
    // YOUR CODE BELOW HERE //
// test if array
    if (Array.isArray(value) === true) {
        return true;
// test if undefined
    } else if (typeof(value) === 'undefined') {
        return false;
// test if boolean
    } else if (typeof(value) === 'boolean') {
        return false;
// test if null
    } else if (value === null) {
        return false;
// test if date
    } else if (value instanceof Date) {
        return false;
// test if object
    } else if (typeof(value) === 'object') {
        return true;
// if not, return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
// declare function typeOf with parameter value
function typeOf(value) {
    // YOUR CODE BELOW HERE //
// test if array
        if (Array.isArray(value) === true) {
        return 'array';
// test if undefined
    } else if (typeof(value) === 'undefined') {
        return 'undefined';
// test if string
    } else if (typeof(value) === 'string') {
        return 'string';
// test if boolean
    } else if (typeof(value) === 'boolean') {
        return 'boolean';
// test if number
    } else if (typeof(value) === 'number') {
        return 'number';
// test if function
    } else if (typeof(value) === 'function') {
        return 'function';
// test if null
    } else if (value === null) {
        return 'null';
// test if date
    } else if (value instanceof Date) {
        return 'date';
// test if object
    } else if (typeof(value) === 'object') {
        return 'object';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
