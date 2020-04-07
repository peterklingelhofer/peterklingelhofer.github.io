// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

// declare function named length that takes string as a parameter
function length(string) {
    // YOUR CODE BELOW HERE //
// return the length of string
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
// declare function named toLowerCase that takes string as a parameter
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
// return the string in all lower case letters
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
// declare function named toUpperCase that takes string as a parameter
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
// return the string in all upper case letters


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
// declare function named toDashCase that takes string as a parameter
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// return the string forced to dash-case
    return string.replace(/\s+/g, '-').toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
// declare function named beginsWith that takes string and char as parameters
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// return true if string begins with char, otherwise false, case-insensitive
    return char[0].toLowerCase() === string[0].toLowerCase();
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
// declare function named endsWith that takes string and char as parameters
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// return true if string ends with char, otherwise false, case-insensitive
    return string[string.length-1].toLowerCase() === char[char.length-1].toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
// declare function named concat that takes stringOne and stringTwo as parameters
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// return the strings concatenated into one
    return stringOne.concat('', stringTwo);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
// declare function named join with parameters stringOne and stringTwo
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// declare variable args, set it equal to array created by arguments
    var args = Array.from(arguments);
// convert the elements of the array into a string
    return args.join([]);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
// declare function named longest with parameters stringOne and stringTwo
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// conditional if one parameter less than the second
    if (stringOne.length <= stringTwo.length) {
// return the second
        return stringTwo;
// otherwise return the first
    } else return stringOne;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
// declare function named sortAscending with parameters stringOne and stringTwo
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// if first string less than second
    if (stringOne < stringTwo) {
// return 1
        return 1;
// if first string greater than second
    } else if (stringTwo < stringOne) {
// return -1
        return -1;
// otherwise return 0
    } else {
        return 0;
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
// declare function named sortDescending with parameters stringOne and stringTwo
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// if first string less than second
    if (stringOne < stringTwo) {
// return -1
        return -1;
// if first string greater than second
    } else if (stringTwo < stringOne) {
// return 1
        return 1;
// else
    } else {
// return 0
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
