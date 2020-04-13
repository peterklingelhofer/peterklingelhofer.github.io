//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return its values in an array
// declare function objectValues with parameter object
function objectValues(object) {
// create storage array
    var storage = [];
// loop through keys in input object
    for (var key in object) {
// push object key values to array
        storage.push(object[key]);
    }
// return storage array
    return storage;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space
// declare function keysToString receiving parameter object
function keysToString(object) {
// create storagekeyNames array
    var storagekeyNames = [];
// loop through keys in input object
    for (var key in object) {
// push keys in object to storage array
        storagekeyNames.push(key);
    }
// return storage array
    return storagekeyNames.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its string values in a string each separated with a space
// declare function valuesToString receiving parameter object
function valuesToString(object) {
// declare storage array
    var storage = [];
// loop through keys in input object
    for (var key in object) {
// if input object key is string
      if (typeof object[key] === 'string') {
// push strings to storage array
        storage.push(object[key]);
    }}
    return storage.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object"
// declare function arrayOrObject receiving parameter collection
function arrayOrObject(collection) {
// if input collection is an array
    if (Array.isArray(collection) === true) {
// return 'array'
        return 'array';
// otherwise if input collection is an object
    } else if (typeof collection === 'object') {
// return 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized
// declare function capitalizeWord receiving string parameter
function capitalizeWord(string) {
// return word with first letter made uppercase followed by rest of word untouched
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
// declare function capitalizeAllWords receiving str as parameter input
function capitalizeAllWords(str) {
// assign str to str split with spaces
        str = str.split(" ");
// loop through each character of each string
    for (var i = 0; i < str.length; i++) {
// set first character of each string at each index to upper, leave the rest untouched
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
// re join separated words with a space between
    return str.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'
// declare function welcomeMessage taking parameter object
function welcomeMessage(object) {
// return welcome then object name first letter capitalized
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1)+ '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'
// declare function profileInfo receiving object as parameter
function profileInfo(object) {
// return object name first letter capitalized, then is a, then object species first letter capitalized
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string 
// separated by a space, if there are no noises return 'there are no noises

// declare function maybeNoises receiving object parameters
function maybeNoises(object) {
// if object noises isn't undefined and length is greater than 0
    if (object.noises !== undefined && object.noises.length > 0) {
// return object noises as string with space in between
        return object.noises.join(' ');
    } else {
// otherwise return 'there are no noises'
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
// function hasWord receives parameters str and word
function hasWord(str, word) {
// return true or false if str has word in it
    return str.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object
// declare function addFriend receiving name and object as parameters
function addFriend (name, object) {
// add input name to object friends array
    object.friends.push(name);
// return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
// declare isFriend receiving inputs name and object
function isFriend(name, object) {
// check if friends in object is undefined and if its length greater than 0
    if (object.friends !== undefined && object.friends.length > 0) {
// return if name is in object friends array
      return (object.friends.indexOf(name) > -1)
    } else {
// otherwise return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
// declare function nonFriends, arguments name, array
function nonFriends(name, array) {
// declare variable notFriends array
    var notFriends = [];
// loop through input array, start 0, end array length, iterate +1
    for (var i = 0; i < array.length; i++) {
// push all names to notFriends
      notFriends.push(array[i].name);
    }
// loop through input array, start 0, end array length, iterate +1
    for (var j = 0; j < array.length; j++) {
// if name is on friends list of corresponding input name in input array
      if (array[j].name === name) {
// loop through input array, start 0, end length of # of friends, iterate +1
        for (var k = 0; k < array[j].friends.length; k++) {
// if name found in friends list, remove it from notFriends
        notFriends.splice(notFriends.indexOf(array[j].friends[k]), 1)
        }
      }
    }
// if notFriends has name of input name, remove that name as well
    notFriends.splice(notFriends.indexOf(name), 1)
// return notFriends
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property 
// <key> on <object> with new <value>. If <key> does not exist on <object> create it.

// create function updateObject with parameters object, key, value
function updateObject(object, key, value) {
// if key does not exist on object, create it
  object[key] = value;
// return object
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

// declare function removeProperties with parameters object and array
function removeProperties(object, array) {
// create storage object
let storage = {};
// loop through keys of input object
  for (var key in object) {
// loop through input array, start 0, end array length, iterate +1
    for (var i = 0; i < array.length; i++) {
// if key of input object is in array at index i
    if (key == array[i]) {
// assign that key to storage object
      storage[key] = object[key];
    }
    }
  }
// for each key in storage object
  for (var key in storage) {
// delete that key from input object
    delete object[key];
  }
// return input object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
// declare function dedup with input parameter array
function dedup(array) {
// create uniquevalues variable, assigned to input array without duplicates
    let uniquevalues = [...new Set(array)];
// return uniquevalues variable
    return uniquevalues;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}