/*
 * LOOPS:
 *
 * 0. To iterate is to perform repeatedly. Loops allow for repeating an action
 * a specific amount of times. Start conditions define where your loop begins.
 * Stopping conditions defines when your loop stops, based on a boolean value.
 * Increments define how much we move per iteration.
 */
 
// 1. Explain while, for, and for-in loops //

// while loop
var count = 0;
while(count < 5){
  console.log(count);
  count++;
}// => prints
/*
 * 0
 * 1
 * 2
 * 3
 * 4
 */

/*
 * The while loop loops through a block of code as long as a specified condition
 * is true.
 */

// for loop
for (var i = 0; i < 5; i++) {
  console.log('Hello');
} // => prints 
/* 
 * Hello
 * Hello
 * Hello
 * Hello
 * Hello
 */

/*
 * The for loop loops through a block of code a number of times.
 */

// for in loop
var object = {
firstName:'Miles',
lastName:'Davis',
hometown:'Alton, Illinois',
}

for (var key in object ) {
  console.log(key);
  console.log(object[key]);
} // => prints
/*
 * firstName
 * Miles
 * lastName
 * Davis
 * hometown
 * Alton, Illinois
 */
 
/*
 * The for in loop loops through the properties of an object.
 */

// 2. Loop any number of times, forward counting up to some limit, backward counting down to 0 //

// for loop counting up from 0 to 4. ++ adds 1 to the value of i each time
for (var i = 0; i < 5; i++) {
  console.log('Hello');
} // => prints 
/* 
 * Hello
 * Hello
 * Hello
 * Hello
 * Hello
 */

// for loop counting down from 5 to 1. -- subtracts 1 from the value of i each time
for (var i = 5; i > 0; i--) {
  console.log('Hello');
} // => prints 
/* 
 * Hello
 * Hello
 * Hello
 * Hello
 * Hello
 */

// 3. Loop over an Array, forwards and backwards //

// looping forward over an array
var myArray = [1, 2, 3, 4, 5, 6];
for (i = 2; i < myArray.length; i++) {
    console.log(myArray[i]);
} // => prints 
/* 
 * 3
 * 4
 * 5
 * 6
 */

// looping backward over an array
for (i = myArray.length; i > 0; i--) {
    console.log(myArray[i]);
} // => prints 
/* 
 * 6
 * 5
 * 4
 * 3
 * 2
 */

// 4. Loop over an Object //

var myObject = {};
myObject.first = 20;
myObject.second = 30;
myObject.third = 40;
for (var key in myObject) {
    myObject[key] = myObject[key] += 5;
}
console.log(myObject); // => prints {first: 25, second: 35, third: 45}
