/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function named search with parameters array and str
function search(array, str) {
// create a for loop starting at 0, ending at array length, +1 increments
    for (var i = 0; i < array.length; i++) {
// if the animal name at index i in lower case is same as input string in lower case
        if(array[i].name.toLowerCase() === str.toLowerCase()){
// return the animal object at index i
            return array[i];
        }
    }
// otherwise return null
    return null;
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called replace with parameters animal, name, replacement
function replace(animals, name, replacement) {
// for loop starting at 0, ending at animals length, incrementing +1
    for (var i = 0; i < animals.length; i++) {
// if input name matches animal name at index i
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
// assign animals at index i to replacement
            animals[i] = replacement;
        }
    }
} 


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function remove with parameters animals, name
function remove(animals, name) {
// for loop starting at 0, ending at animals length, incrementing +1
    for (var i = 0; i < animals.length; i++) {
// if input name matches animal name at index i
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
// splice out that animal at index i
            animals.splice(i)
        }
    }
} 


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
// declare function add with parameters animals, animal
    if (animal.name.length > 0 && animal.species.length > 0) {
// push input animal to animals array
        animals.push(animal);
        animals.push(animal);
// for loop starting at 0, ending at animals length, incrementing +1
    for (var i = 0; i < animals.length; i++) {
// if input name matches animal name at index i
        if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
// remove animal if name is identical to name already present in animals
            animals.pop(animal);
            }
        } 
    }
        
} 


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
