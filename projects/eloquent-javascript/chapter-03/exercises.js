////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// “Math.min that returns its smallest argument. 
// We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.”
// declare function min that takes arguments numOne and numTwo
function min(numOne, numTwo) {
// return the smallest number of the two inputs
  return Math.min(numOne, numTwo);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare a function isEven with input number
function isEven(number) {
// if input number is 0
  if (number === 0) {
// return true
    return true;
// else if input number is 1
  } else if (number === 1) {
// return false
    return false;
// else if input number is negative
  } else if (number < 0) {
// re call function w/ recursion making input number positive
    return isEven(-number);
// else
  } else {
// re call function w/ recursion subtracting 2 from input number
    return isEven(number - 2);
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare function countChars with inputs str and char
function countChars(str, char) {
// declar variable found to count # of times char in string
  var found = 0;
// for loop, start 0, end length of string, increment +1
  for (var i = 0; i < str.length; i++) {
// if string at index i equal to char parameter input
  if (str[i] == char) {
// add one to the found counter
    found += 1;
    }
  }
// return found
  return found;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare function countBs with input str
function countBs(str) {
// declar variable found to count # of times char in string
  var found = 0;
// for loop, start 0, end length of string, increment +1
  for (var i = 0; i < str.length; i++) {
// if string at index i equal to char parameter input
  if (str[i] == 'B') {
// add one to the found counter
    found += 1;
    }
  }
// return found
  return found;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
