// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
// declare function named range with parameters start and end
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
// declare variable ans, an array
    var ans = [];
// if start is less than end
    if (start < end) {
// for loop, start at start, end less than equal to end, increment i +1
    for (let i = start; i <= end; i++) {
// push i to ans array
        ans.push(i);
    }
// return array ans with i count stored
    return ans;
    }
// else if start greater than end
    else if (start > end) {
// for loop begins at start, ends when i greater than equal to end, increment i -1
    for (let i = start; i >= end; i--) {
// push i to ans array
        ans.push(i);
    }
// return array ans with i count stored
    return ans;
    }


    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}