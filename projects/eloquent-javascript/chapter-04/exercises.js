////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function range, end, step operator positive if start less than end otherwise negative
function range(start, end, step = start < end ? 1 : -1) {
// let array be an empty array  
  let array = [];
// if start and end both 1
  if (start === 1 && end === 1) {
// return empty array
    return [];
  }
// if step greater than 0
  if (step > 0) {
// for loop i start end less than end, i increments by step
    for (let i = start; i <= end; i += step) 
// push i to array
    array.push(i);
// else
  } else {
// for loop i start end greater than end, i increments by step
    for (let i = start; i >= end; i += step) 
// push i to array
    array.push(i);
  }
// return array
  return array;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function sum, parameter array
function sum(array) {
// declare total, assign to 0
  let total = 0;
// for loop looping through each value of array
  for (let value of array) {
// add value of current array index to total
    total += value;
  }
// return total
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function reverseArray with input parameter array
function reverseArray(array) {
// declare output variable, assign to empty array
  let output = [];
// for loop, i is array length - 1, end i greater than 0, increment -1
  for (let i = array.length - 1; i >= 0; i--) {
// push array values to output variable in reverse order
    output.push(array[i]);
  }
// return output
  return output;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function reverseArrayInPlace, takes parameter array
function reverseArrayInPlace(array) {
// for loop start is zero, ends when half array length (rounded down to whole integer), increment +1
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
// declare old as array at index i
    let old = array[i];
// assign array at i to the array's index at array length minus 1 minus current index
    array[i] = array[array.length - 1 - i];
// assign array's index at array length minus 1 minus current index to old
    array[array.length - 1 - i] = old;
  }
// return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare function arrayToList with input parameter array
function arrayToList(array) {
// declare list, assign to null;
  let list = null;
// for loop, start array length - 1, end i greater than 0, increment -1 (count down)
  for (let i = array.length - 1; i >= 0; i--) {
// set list equal to object, assign value key to array at index i, assign rest to list
    list = {value: array[i], rest: list};
  }
// return list
  return list;
}





////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare function listToArray with parameter list
function listToArray(list) {
// declare variable array, assign to empty array
  let array = [];
// for loop, start node = list, end at node, increment by rest of node
  for (let node = list; node; node = node.rest) {
// push node value to array variable
    array.push(node.value);
  }
// return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function prepend
function prepend(value, list) {
// return value parameter before rest of list
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function nth with parameters list and n
function nth(list, n) {
// if no list return undefined
  if (!list) return undefined;
// if n is zero return list value
  else if (n == 0) return list.value;
// otherwise return recursion of nth, first parameter rest of list, n - 1 as second parameter
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// declare function deepEqual, taking parameters a and b
function deepEqual(a, b) {
// if a deeply dequal to b return true
  if (a === b) return true;
// if a is null or a is not equal to object type or b is null or b is not equal to object type return false
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
// declare keysA variable, assign to object keys of a
  let keysA = Object.keys(a);
// declare keysB variable, assign to object keys of b
  let keysB = Object.keys(b);
// if keysA length not equal to keysB length, return false
  if (keysA.length != keysB.length) return false;
// for loop through keys of keysA
  for (let key of keysA) {
// if keysB doesn't include key from A or key from a and b not deeply equal return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
// return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
