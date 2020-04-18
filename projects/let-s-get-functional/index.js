// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-peterklingelhofer");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional // assuming in /peterklingelhofer.github.io folder
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // I: array
    // O: number
    // using filter find the number of male customers in our list
    let arrOfMales = _.filter(array, function(customerObj) {
        // filter all of the male customers
        // each Customerobj has a gender property
        return customerObj.gender === 'male'; 
    });
    return arrOfMales.length;
};

var femaleCount = function(array){
    // using the reduce function find the number of female customers
    return _.reduce(array, function(sum, customerObj){
       // if the customerObj is a female
            // increment my sum by 1
            if(customerObj.gender === 'female'){
                sum += 1;
            }
       // if the customerObj is not a female
            // keep my current sum   
            return sum;
    }, 0);
};

var oldestCustomer = function(array){
    // find the oldest customer, input array, output string
    let oldestAge = _.reduce(array, (prev, current) => {return (prev.age > current.age) ? prev : current}, 0);  
    for (let i = 0; i < array.length; i++) {
        if (oldestAge.age === array[i].age) {
            // console.log('Oldest Name', array[i].name);
            return array[i].name;
        }
    }
};


var youngestCustomer = function(array){
    // find the oldest customer, input array, output string
    let oldestAge = _.reduce(array, (prev, current) => {return (prev.age < current.age) ? prev : current}, 0);  
    for (let i = 0; i < array.length; i++) {
        if (oldestAge.age === array[i].age) {
            // console.log('Youngest Name', array[i].name);
            return array[i].name;
        }
    }
};

var averageBalance = function(array){
    let totalCustomers = 0;
    let tempConversion
    // using the reduce function find the TOTAL BALANCE of the customers
    let totalBalance = _.reduce(array, function(sum, customerObj){
       // if the customerObj is a female
            // increment my sum by 1
            // if(customerObj.gender === 'female'){
            //     sum += 1;
            // }
            //change string to get rid of dollar sign
            //convert string to number
            tempConversion = customerObj.balance.replace(/\$/g, '');
            tempConversion = tempConversion.replace(/\,/g, '');
            sum += parseFloat(tempConversion)
            totalCustomers +=1
            // keep my current sum
            return sum;
    }, 0);
    // console.log('totalBalance',totalBalance)
    let averageBalance = (totalBalance / totalCustomers)
    // console.log('averageBalance',averageBalance)
    return averageBalance;
};

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(sum, customerObj){
       // if the customerObj first letter is input
            // increment my sum by 1
            if(customerObj.name[0].toLowerCase() === letter.toLowerCase()){
                sum += 1;
            }
            return sum;
    }, 0);
};


var friendFirstLetterCount = function(array, customer, letter){
    for (let i = 0; i < array.length; i++) {
        if (customer === array[i].name) {
    return _.reduce(array[i].friends, function(sum, customerFriends){
       // if the customerObj friend first letter is input
            // increment my sum by 1
            if(customerFriends.name[0].toLowerCase() === letter.toLowerCase()){
                sum += 1;
            }
            return sum;
    }, 0);
            
        }
    }
};

var friendsCount = function(array, name){
    let areFriendsWith = [];
        // console.log(array);
        // console.log(name);
    for (let i = 0; i < array.length; i++) {
        // console.log(i);
        for (let j = 0; j < array[i].friends.length; j++) {
            for (let key in array[i].friends[j]) {
                
            if (array[i].friends[j].name === name) {
            areFriendsWith.push(array[i].name);
            }
            }
        }
            // console.log('ARE FRIENDS WITH(inloop)', areFriendsWith);
    }
    // console.log('ARE FRIENDS WITH', areFriendsWith);
    // return areFriendsWith;
    
    let unique = [...new Set(areFriendsWith)];
    return unique;
};

// 


    
// 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:

// var topThreeTags = function(array){
//     let tagCount = {};
//     for (let i = 0; i < array.length; i++) {
//     tagCount = _.reduce(array[i], function (tagCount, tag, i){
//         if (tagCount[tag]) {
//             tagCount[tag] += 1;
//         } else {
//             tagCount[tag] = 1;
//         }
//         console.log('Tag Count', tagCount);
//          return tagCount;
    
//     }, tagCount)
//     console.log(tagCount);
// } }

var topThreeTags = function(array){
    let words = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            words.push(array[i].tags[j]);
            // console.log(array[i])
        }
    }
    // console.log(words);
    var wordCount = _.reduce(words, function(accObj, word){
      // check the object if the word exist as a key
      if(accObj[word]){
        // increment it's count value
        accObj[word]++;
      } else { // if the obj does not contain the word as a key
        // create a new key/val pair w/ the word as key and 1 as val
        accObj[word] = 1;
      }
      return accObj;
    }, {})
    // console.log(wordCount);
    // need to sort the occurences of each letter. Cant use the sort method on wordCount because we would get a type error, so we're going to add the properties as sub arrays in a larger array called arrayOfNestedCounts.
    var arrayOfNestedCounts = []
    for(let key in wordCount){
      // Push an array with an element of the word and its count 
      arrayOfNestedCounts.push([key, wordCount[key]])
    }
    // sort by the word's count (index 1 of the array)
    arrayOfNestedCounts.sort(function(a, b){
      // the sort function will sort in decending order
      return b[1] - a[1];
    })
    // slide off the first 3 elements in the array. Those will be the top 3 words 
    var top3arr = arrayOfNestedCounts.slice(0, 3)
    // using map, change the elements in the array from sub arrays to the words at the 0th index
    var top3Words = _.map(top3arr, function(wordAndCountArr){
      // return the word in place of the nested array elements
      return wordAndCountArr[0];
    })
    return top3Words;
    // console.log(top3Words);
}    





var genderCount = function(array){
    let seed = {female: 0, male: 0, 'non-binary': 0}; 
    return _.reduce(array, function(personCount, genderValue, i){
        if (array[i]['gender']) {
            personCount[array[i]['gender']] += 1; 
        } else {
            personCount[array[i]['gender']] = 1; 
        } 
        return personCount; 
    }, seed);
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
