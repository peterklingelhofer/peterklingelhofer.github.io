/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare variable animal object
var animal = {};
// add key species, and species name
animal.species = "Dolphin";
// add name using bracket notation to object
animal["name"] = "Freddie";
// add noises using dot notation as array
animal.noises = [];
// log animal 
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named noises, assign it to an empty array
var noises = [];
// using bracket notation give noises it's first element, a sound
noises[0] = 'screech';
// using an array function add another noise to the end of noises
noises.push('yell');
// add an element to noises using another function
noises.unshift('howl');
// using bracket syntax add another element to the end of noises
noises[noises.length] = 'talk';


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// #assign noises property on animal to our new noises array using bracket notation
animal['noises'] = noises;
// using any syntax add another noise to the noises property on animal
noises[noises.length] = 'Yeet';
// Brackets Notation , dot notation


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 
// 1. dot notation and bracket notation

// 2. bracket notation, splice() method


/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable named animals and assign it to an empty array
var animals = [];
// push our animal that we created to animals
animals.push(animal);
// console log animals
console.log(animals);
// create variable duck and assign it to the data
var duck = {
    species: 'duck',
    name: 'jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
};

// push duck to animals
animals.push(duck);
// console log animals
console.log(animals);
// create another animal object with species, a name, and at least two sounds
var frog = {
    species: 'frog',
    name: 'sally',
    noises: ['ribbit', 'croak', 'snore', 'cricket'],
};
// push newly created animal to animals
animals.push(frog);
// create another animal object with species, a name, and at least two sounds
var lion = {
    species: 'lion',
    name: 'simba',
    noises: ['roar', 'growl', 'snarl', 'purr'],
};
// push newly created animal to animals
animals.push(lion);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 
var friends = [];
//2. Arrays are good for a simple list
function getRandom() {
  return Math.floor(Math.random() * Math.floor(animals.length));
}
//
friends.push(animals[getRandom()].name);
console.log(friends);
// 
animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}