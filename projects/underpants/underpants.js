// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// declare function identity, with parameter value
_.identity = function(value) {
// return value
    return value;
}
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
// declare function typeOf with parameter value
_.typeOf = function(value) {
// if value is a string
    if (typeof(value) === 'string') {
// return string
    return "string";
// if value is an array
} else if (Array.isArray(value) === true) {
// return array
    return "array";
// if value is undefined
} else if (typeof(value) === 'undefined') {
// return undefined
  return "undefined";
// if value is number
} else if (typeof(value) === "number") {
// return number
  return "number";
// if value is boolean
} else if (typeof(value) === "boolean") {
// return boolean
  return "boolean";
// if value is null
} else if (value === null) {
// return null
  return "null";
// if value is object
} else if (typeof(value) === 'object'){
// return object
  return "object";
// default
} else {
// return function
  return "function";
}
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// declare function first, with parameters array and number
_.first = function(array, number) {
// declare storage empty array
   let storage = []; 
// if array is not an array
   if (Array.isArray(array) !== true) {
// return empty array
        return []; 
// if number is undefined or NaN
    } else if (number === undefined || ((isNaN(number)) === true)) {
// return first index of array
        return array[0]; 
// if number greater than array length
    } else if (number > array.length) {
// return array
        return array;
// default
    } else {
// loop, start 0, end number, increment +1
        for (let i = 0; i < number; i++) {
// push array at index i to storage
            storage.push(array[i]); 
        }
// return storage
    } return storage; 
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// declare function last, accepting parameters array and number
_.last = function(array, number) {
// declare storage array
   let storage = []; 
// if array is not array
   if (Array.isArray(array) !== true) {
// return empty array
        return []; 
// if number is undefined or NaN
    } else if (number === undefined || ((isNaN(number)) === true)) {
// return last index of array
        return array[array.length -1]; 
// if number greater than length of array
    } else if (number > array.length) {
// return array
            return array;
// default
    } else {
// for loop, start at array length minus number, end at array length, increment +1
        for (let i = array.length - number; i < array.length; i++) {
// push array at index i to storage
            storage.push(array[i]); 
        }
// return storage
    } return storage; 
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// declare function indexOf taking parameters array and value
_.indexOf = function(array, value) {
// if value is greater than length of array
//     if (value > array.length) {
// // return array
//             return array;
// // default
//     } else {
// loop, start 0, end at array length, increment +1
        for (let i = 0; i < array.length; i++) {
// if array at index i is value
            if (array[i] === value)
// return i
            return i;
        // } 
// otherwise return -1
    }  return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// declare function contains, with parameters array and value
_.contains = function(array, value) {
// let something equal empty string
let something = '';
// loop starting at 0, end at array length, increment +1
    for (var i = 0; i < array.length; i++) {
// assign something to true if value = array at index i, otherwise assign it notyet
        something = value === array[i] ? true : 'notyet';
// if something is true
        if (something === true) {
// return true
            return true;
        }
// otherwise return false
    } return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
// declare function each, with parameters collection and method
_.each = function(collection, method) {
// if collection is array
    if (Array.isArray(collection) === true) {
// loop starting at 0, end at collection length, increment +1
        for (let i = 0; i < collection.length; i++) {
// run collection at index i, index i, and collection through method
            method(collection[i], i, collection);
        }
    }
// default
    else {
// loop through object keys in collection
        for (var key in collection) {
// run collection key value, key, and collection through method
            method(collection[key], key, collection);
        }
    }
        
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// _.unique = function(array) {
//     let uniquevalues = [...new Set(array)];
//     return uniquevalues;
// }
_.unique = function(array) {
 var unique = [];
 for (var i = 0; i < array.length; i++) {
   if (_.indexOf(unique, array[i]) < 0) {
     unique.push(array[i]);
   }
 } return unique; 
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, method) {
// declare storage empty array
let storage = [];
// if collection is array
    if (Array.isArray(array) === true) {
// loop starting at 0, end at collection length, increment +1
        for (let i = 0; i < array.length; i++) {
// run collection at index i, index i, and collection through method
            if (method(array[i], i, array) === true) {
// push array at index i to storage array
                storage.push(array[i]);
            };
        }
// return storage array
    } return storage;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, method) {
// assign storage array to input array
let storage = array;
// assign filtered to output of filter function with input array and method
let filtered = _.filter(array, method);
// declare falseArray, empty array
let falseArray = [];
// for loop start 0, end storage length, increment +1
    for (let i = 0; i < storage.length; i++) {
// if contains function with filtered as input and storage at index i is false
        if (_.contains(filtered, storage[i]) === false) {
// push storage at index i to falseArray array
            falseArray.push(storage[i]);
        }
    }
// return falseArray
return falseArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, method) {
// declare storage empty array
    let storage = [];
// set storage at index 0 equal to filter function with inputs array and method
        storage[0] = _.filter(array, method);
// set storage at index 1 equal to reject function with inputs array and method
        storage[1] = _.reject(array, method);
// return storage array
    return storage;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, method) {
    let storage = [];
// if collection is array
    if (Array.isArray(collection) === true) {
// loop starting at 0, end at collection length, increment +1
        for (let i = 0; i < collection.length; i++) {
// push collection at index i, index i, and collection through method
            storage.push(method(collection[i], i, collection));
        }
    }
// default
    else {
// loop through object keys in collection
        for (var key in collection) {
// push collection key value, key, and collection through method
            storage.push(method(collection[key], key, collection));
        }
    }
    return storage;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
// assign storage to map function with inputs array and identity function
let storage = (_.map(array, _.identity));
// declare names, assign to empty array
let names = [];
// for loop start 0, less than array length, increment +1
    for (let i = 0; i < storage.length; i++ ) {
// push array at index i with input property to propertyStorage array
        names.push(storage[i].name);
    }
// return storage array
return names;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, method) {
// declare variable test, assign to empty string
   let test = '';
// if input method is not a function
    if (typeof method !== 'function') {
// loop start 0, end at length of collection, iterate +1
          for (let i = 0; i < collection.length; i++) {
// if collection at index i is truthy, test assigned true, if not test assigned false
        collection[i] ? test = true : test = false;
// if test is false
        if (test === false) {
// return false
            return false; 
        } 
// return true
        } return true; 
    } 
// assign results to true
    let results = true; 
// if method is a function
    if (typeof method === 'function') {
// assign storage to map function with input parameters collection and method
        let storage = _.map(collection, method);
// loop starting at 0, end at length of storage, iterate +1
        for (let i = 0; i < storage.length; i++) {
// if storage at index i is false
            if (storage[i] === false) {
// set results equal to false
                results = false; 
            } 
        }
    }
// return results
    return results; 
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, method) {
// assign test to empty string
     let test = '';
// if input method is not a function
    if (typeof method !== 'function') {
// loop starting at 0, end at length of collection, increment +1
          for (let i = 0; i < collection.length; i++) {
// if collection at index i is truthy, assign true to test, otherwise assign test to false
        collection[i] ? test = true : test = false;
// if test is true
        if (test !== false) {
// return true
            return true; 
        } 
// return false
        } return false; 
    } 
// assign false to results
    let results = false; 
// if method is a function
    if (typeof method === 'function') {
// assign map function with arguments collection and method to storage
        let storage = _.map(collection, method);
// loop starting at 0, end at length of storage, increment +1
        for (let i = 0; i < storage.length; i++) {
// if storage at index i is true
        if (storage[i] === true) {
// assign true to results
            results = true; 
        } 
    }
    }
// return results
    return results; 
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, method, seed) {
// declare current variable
    let current;
// if seed is undefined, assign array at index 0 to current, otherwise assign seed to current
    seed === undefined ? current = array[0] : current = seed;
// declare i variable    
    let i;
// loop, start at 1 if seed undefined, otherwise start at 0, end at length of array, increment +1
    for (seed === undefined ? i = 1 : i = 0; i < array.length; i++) {
// assign method function with arguments current, array at index i, and index, to current        
        current = method(current, array[i], i);
    }
// return current
    return current;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...objs) {    
// assign object properties from rest of object arguments after first object to first object
  Object.assign(obj1, ...objs);
// return updated first object
  return obj1; 
};





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
