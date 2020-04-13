// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// flattens two dimensional array into single array
// declare function flatten with parameter arrays
function flatten(arrays) {
// concatenate all array values of arrays parameter, starting array is empty array, and reduce those 
  return arrays.reduce((a, b) => a.concat(b), []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// should run a function over an array as if looping
// should work with unique 'test' value
// should work with unique 'update' value
// should work with unique 'body' value
// declare loop that takes parameters value, test, update, body
function loop(value, test, update, body) {
// while current input value is true when tested
  while (test(value)) {
// Pass current value to body function
  body(value);
// set new value by sending current value through update
  value = update(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// should determine if every value passes a test
// Every method, returns true when the given function returns true for every
// element in the array. Write every as function that takes an array and predicate
// function as parameters, write one using a loop and one using some method

// declare function every, with parameters array and test
function every(array, test) {
// for each value of the array
  for (let val of array) {
// if it fails the test return false
    if (!test(val)) return false;
  }
// otherwise return true
  return true;
}

// declare function every2 with parameters array and test
function every2(array, test) {
// using some method, test each element with arrow function
  return !array.some(element => !test(element));
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// declare function dominantDirection with parameter text
function dominantDirection(text) {
// variable counted assign to countBy (p93 eqjs), accepting parameters text, char
  let counted = countBy(text, char => {
// variable script is first character in script
    let script = characterScript(char.codePointAt(0));
// return if script direction is true, none
    return script ? script.direction : "none";
// apply filtering of names not equal to none
  }).filter(({name}) => name != "none");
// if length of counted is zero, return ltr
  if (counted.length == 0) return "ltr";
// return reduced counted array, fun parameters a, b. if a count greater than b count
// a, otherwise b
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
