/*
 * LOOPS:
 *
 * 0. To iterate is to perform repeatedly. Loops allow for repeating an action
 * a specific amount of times. Start conditions define where your loop begins.
 * Stopping conditions defines when your loop stops, based on a boolean value.
 * Increments define how much we move per iteration. Be careful about infinite
 * loops, if a loop is set to never end and the stopping conditions are never
 * met, it can crash the program.
 */
 
// 1. Explain while, for, and for-in loops //

/*
 * While loops start by declaring and assigning a variable to be incremented.
 * It is assigned to the value the loop will start at. Next, the word while 
 * is written, followed by a condition to be true while the loop continues to
 * run, denoting when the loop will end or the end condition in parantheses.
 * After that, in brackets, the action the loop performs occurs, followed by
 * the increment or change to the variable after each successful iteration
 * of the loop.
 */

// while loop
var count = 0; // 0 is the starting condition, where the loop will start
while(count < 5){ // while is the type of loop, and condition or end is in paranthesis
  console.log(count); // within brackets are what the loop does each time
  count++; // after performing an action, the loop adds 1 to count incrementally
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

/*
 * For loops begin with the word for. Then, after an open paranthesis, the a variable
 * that will be iterated is declared and assigned to the start condition, followed
 * by a semicolon (;). Next, the end conditions are written, meaning the loop will
 * continue until this condition is no longer true, followed by another semicolon.
 * Then, the iteration is written, meaning how the variable changes after each
 * successful completion of the loop is stated, followed by a close paranthesis.
 */
 
for (var i = 0; i < 5; i++) { // Start: 0. End: 5. Iterates adding 1 each time
  console.log('Hello'); // Functionality: prints 'Hello' each time
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

/*
 * For in also begin with for, and then an open paranthesis. For looping through
 * properties of objects,  var key in object and close paranthesis is written, meaning
 * the loop will continue through each object property, for however many properties
 * the object has. Following that, an open bracket and the code following denote
 * what action to be performed each time. As with the example below, if you want to
 * refer to the object's key, you would write key, whereas if you want to refer to
 * the key value, you would write object[key]. Then close paranthesis denotes the end
 * of actions to be performed with each iteration of the loop.
 */

var object = {
firstName:'Miles',
lastName:'Davis',
hometown:'Alton, Illinois',
}

for (var key in object) { // For each key in the object
  console.log(key); // Print the name of the key
  console.log(object[key]); // Print the value of that key
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
for (i = myArray.length - 1; i > 0; i--) {
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
