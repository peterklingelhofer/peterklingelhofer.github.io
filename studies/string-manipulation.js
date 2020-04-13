/*
 * STRING MANIPULATION:
 *
 * 0. Strings can be manipulated and changed using operators and string
 * methods.
 */
 
// 1. string manipulation with operators //

// concatenation operator (+)
var firstName = 'Maggie';
var lastName = 'Green';
var fullName = firstName + ' ' + lastName;
console.log(fullName); // => prints Maggie Green
console.log('Maggie' + ' ' + 'Green'); // => prints Maggie Green

/*
 * Strings may be added together with the + operator
 */

// increment operator (+=)

// 'x += y' is the same as 'x = x + y'
// adds the values together, and assigns sum to variable on left

var x = 2;
var y = 3;
x += y;
console.log(x); // => prints 5, as x is now equal to 5

// 2. string manipulation with string methods //

/*
 * Primitive values such as strings cannot have properties or methods, as they
 * are not objects. However, when executing methods and properties, primitive
 * values are treated as objects in JavaScript.
 */
 
// string length
var text1 = 'abcdef';
console.log(text1.length); // => prints 6

/*
 * The length property returns the length of a string
 */
 
// indexOf()
var text2 = "there is a circle in a circle right here";
console.log(text2.indexOf("circle")); // => prints 11

/*
 * The indexOf() method returns the index or position of the first occurrence of
 * a specified text in a string. -1 is returned if the text is not found.
 */
 
// lastIndexOf()
console.log(text2.lastIndexOf("circle")); // => prints 23

/*
 * The lastIndexOf() method returns the index or position of the last occurrence 
 * of a specified text in a string. -1 is returned if the text is not found.
 */

var text3 = "there is a circle in a circle in a circle right here";
console.log(text3.indexOf("circle", 14)); // => prints 23

/*
 * Both indexOf() and lastIndexOf() accept a second parameter as the starting
 * position for the search. lastIndexOf() searches backwards, from end to
 * to beginning, so it would start at the second parameter provided and from
 * there search to the beginning of the string. Neither indexOf() nor
 * lastIndexOf() can take powerful search values (regular expressions), whereas
 * search() can.
 */
 
// search()
console.log(text3.search('circle')); // => prints 11
 
/*
 * The search() method searches a string for a specified value and returns the
 * position of the match. It cannot take a second start position argument.
 */

// slice()
var text4 = "this is a waiting game";
console.log(text4.slice(10, 17)); // => prints waiting

/*
 * slice() extracts a part of a string and returns the extracted part in a new
 * string. It takes start and end position as parameters. Remember, the first
 * position is 0. If you omit the second parameter, slice() will slice out the
 * rest of the string. substring() behaves similarly to slice(), except that
 * substring() cannot accept negative indexes.
 */

// substr()
text4 = "this is a waiting game";
console.log(text4.substr(4, 10)); // => prints this is a wait

/*
 * substr() is similar to slice(), except that the second parameter specifies
 * the length of the extracted part. If the second parameter is omitted,
 * substr() will slice out the rest of the string.
 */

// replace()
text4 = "this is a waiting game";
var text5 = text4.replace('waiting', 'fun')
console.log(text5); // => prints this is a fun game

/*
 * replace() replaces a specified value with another value in a string. It does
 * not change the string it is called on, but rather returns a new string. By
 * default, replace() replaces only the first match.
 */
 
var text4 = "this is a waiting game";
var text5 = text4.replace(/WAITING/i, 'fun')
console.log(text5); // => prints this is a fun game

/*
 * To use replace() case insensitive, use /YOURVALUE/i in the first parameter.
 */
 
var text6 = "there is a circle in a circle in a circle right here";
var text7 = text6.replace(/circle/g, 'triangle')
console.log(text7); // => prints there is a triangle in a triangle in a triangle right here

/*
 * To use replace() to replace all matches, use /YOURVALUE/g in the first parameter.
 */

// toUpperCase()
var text8 = 'fiddle';
var text9 = text8.toUpperCase();
console.log(text9); // => prints FIDDLE

/*
 * A string can be converted to all upper case letters with toUpperCase().
 */

// toLowerCase()
var text10 = 'sToNeS';
var text11 = text10.toLocaleLowerCase();
console.log(text11); // => prints stones

/*
 * A string can be converted to all lower case letters with toLowerCase().
 */

// concat()

var text11 = "Hello";
var text12 = "Friend";
var text13 = text11.concat(" ", text12);
console.log(text13); // => prints Hello Friend

/*
 * concat() can be used instead of the plus operator
 */

// trim()

var text14 = "     Hello Friend       ";
console.log(text14.trim()); // => prints Hello Friend

/*
 * trim() removes whitespace from both sides of a string.
 */
 
// property access
var text15 = "Hello Friend";
console.log(text15[0]); // => prints H
console.log(text15[4]); // => prints o

/*
 * Bracket notation allows for property access on strings.
 */
 
// split()

var text16 = "a,b,c,d,e";
console.log(text16.split(',')); // => prints ["a", "b", "c", "d", "e"]
console.log(text16.split('')); // => prints ["a", ",", "b", ",", "c", ",", "d", ",", "e"]

/*
 * A string can be converted to an array with split(). It takes an
 * argument that tells it what to split by. If the separator is '',
 * the returned array will be an array of single characters.
 */
 