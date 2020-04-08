
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function triangles that takes parameter number
function triangles(number) {
// create variable hashtagData
  var hashtagData = '#';
// create for loop, starts at hashtagData #, uses length to count, less than number
// adds one # every iteration
  for (hashtagData = '#'; hashtagData.length - 1 < number; hashtagData += '#') {
// console log hashtagData each time
    console.log(hashtagData);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function fizzBuzz with start and end parameters
function fizzBuzz(start, end) {
// for loop setting var i = start, stopping at <= end, iterates up 1 each time
  for (var i = start; i <= end; i++) {
// checks if remainder of dividing by 15 (3*5) is 0    
  if (i%15 == 0) { 
// prints FizzBuzz if 15 is divisible    
      console.log('fizzbuzz'); 
// checks if remainder of dividing by 3 is 0      
  } else if (i%3 == 0) { 
// prints Fizz if 3 divisible    
      console.log('fizz'); 
// checks if remainder of dividing by 5 is 0      
  } else if (i%5 == 0) { 
// prints Buzz if 5 divisible    
      console.log('buzz'); 
// if no special conditions are true let it ride as is      
  } else { 
// print the current iteration b/c its not divisible by 3 or 5 cleanly    
      console.log(i); 
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// declare function drawChessboard that takes number parameter
function drawChessboard(number) {
// declare var board, set as empty string
  var board = "";

// for loop start at 0, go while less than number, increase by 1 each iteration
  for (var i = 0; i < number; i++) {
// for loop start at 0, go while less than number, increase by 1 each iteration using alternate index
    for (var alt = 0; alt < number; alt++) {
// add index of inner and outer loops together, check if sum is odd
      if ((alt + i) % 2 == 1) {
// add # to end of string
        board += "#";
// else (if sum is even)
      } else {
// add space to end of string
        board += " ";
      }
    }
// after each loop of the inner loop, add new line at end of string
  board += "\n";
}
// console log board
console.log(board);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
