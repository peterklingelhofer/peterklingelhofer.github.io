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
        // return males
        return customerObj.gender === 'male'; 
    });
    // return length of males
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
    // seed is 0
    }, 0);
};

var oldestCustomer = function(array){
    // find the oldest customer, input array, output string
    let oldestAge = _.reduce(array, (prev, current) => {return (prev.age > current.age) ? prev : current}, 0); 
    // for loop start 0, end array length, increment +1
    for (let i = 0; i < array.length; i++) {
        // if age key in youngest age is same as age in array at index i
        if (oldestAge.age === array[i].age) {
            // return name at array at index i
            return array[i].name;
        }
    }
};


var youngestCustomer = function(array){
    // find the oldest customer, input array, output string
    let youngAge = _.reduce(array, (prev, current,) => {return (prev.age < current.age) ? prev : current}, 0);  
    // for loop start 0, end array length, increment +1
    for (let i = 0; i < array.length; i++) {
        // if age key in oldest age is same as age in array at index i
        if (youngAge.age === array[i].age) {
            // return name at array at index i
            return array[i].name;
        }
    }
};

var averageBalance = function(array){
    // declare totalCustomers, assign it to 0
    let totalCustomers = 0;
    // declare tempConversation variable
    let tempConversion;
    // using the reduce function find the TOTAL BALANCE of the customers
    let totalBalance = _.reduce(array, function(sum, customerObj){
       // if the customerObj is a female
            //change string to get rid of dollar sign
            tempConversion = customerObj.balance.replace(/\$/g, '');
            //change string to get rid of comma
            tempConversion = tempConversion.replace(/\,/g, '');
            // increment my sum by balance, converting string to a number
            sum += parseFloat(tempConversion);
            // increment totalCustomers amount by +1
            totalCustomers +=1;
            // return my current sum
            return sum;
    }, 0);
    // assign averageBalance to totalBalance divided by totalCustomers
    let averageBalance = (totalBalance / totalCustomers);
    // return averageBalance
    return averageBalance;
};

var firstLetterCount = function(array, letter){
    // return reduce function with input array, function parameters sum and customerObj
    return _.reduce(array, function(sum, customerObj){
       // if the customerObj first letter is input
            if(customerObj.name[0].toLowerCase() === letter.toLowerCase()){
            // increment my sum by 1
                sum += 1;
            }
            // return sum
            return sum;
    // seed is 0
    }, 0);
};


var friendFirstLetterCount = function(array, customer, letter){
    // for loop start 0, end array length, iterate +1
    for (let i = 0; i < array.length; i++) {
        // if customer is name at array element at index i
        if (customer === array[i].name) {
            // return reduce, finding each persons friend list and summing their friends starting at input letter
    return _.reduce(array[i].friends, function(sum, customerFriends){
       // if the customerObj friend first letter is input
            if(customerFriends.name[0].toLowerCase() === letter.toLowerCase()){
            // increment my sum by 1
                sum += 1;
            }
            // return sum
            return sum;
    // seed is 0        
    }, 0);
        }
    }
};

var friendsCount = function(array, name){
    // declare storage array
    let areFriendsWith = [];
    // for loop, start at 0, end at array length, iterate +1
    for (let i = 0; i < array.length; i++) {
        // for loop, start at 0, end at length of each person's friend's list, iterate +1
        for (let j = 0; j < array[i].friends.length; j++) {
            // for loop through keys in each person's friend's list
            for (let key in array[i].friends[j]) {
                // if name on friend's list is input name
                if (array[i].friends[j].name === name) {
                // push name to storage array
                areFriendsWith.push(array[i].name);
            }
            }
        }
    }
    // remove duplicate names
    let unique = [...new Set(areFriendsWith)];
    // return unique names
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
    // declare container for all tags
    let tags = [];
    // for loop through obj array, start 0, end obj array length, iterate +1
    for (let i = 0; i < array.length; i++) {
        // for loop through each object's tag list, start 0, end length of tag list, iterate +1
        for (let j = 0; j < array[i].tags.length; j++) {
        // push each tag found to the tags array for storage
            tags.push(array[i].tags[j]);
            // console.log(array[i])
        }
    }
    // assign variable tagCount reduce with input tags, function parameters accObj and tag
    let tagCount = _.reduce(tags, function(tagTally, tag){
      // check the object to see if the tag exists as a key
      if(tagTally[tag]){
        // if it exists increment it's count value
        tagTally[tag]++;
        // if the obj does not contain the tag as a key
      } else { 
        // create a new key-value pair with the tag as key, setting 1 as the value
        tagTally[tag] = 1;
      }
      // return accObj
      return tagTally;
    }, {});
    // declare empty array variable
    let tagCountsArray = [];
    // with a let key in wordCount, add the properties as sub arrays in a larger array called tagCountsArray.
    for(let key in tagCount){
      // Push an array with an element of the tag and its count 
      tagCountsArray.push([key, tagCount[key]]);
    }
    // sort by the tag's count (index 1 of the array)
    tagCountsArray.sort(function(a, b){
    // the sort function will sort in decending order
      return b[1] - a[1];
    });
    // get the first three elements of the array, the three most common tags
    let top3arr = tagCountsArray.slice(0, 3);
    // using map, change the elements in the array from sub arrays to the tags at the 0th index
    let top3Tags = _.map(top3arr, function(tagAndCountArr){
      // return the word in place of the nested array elements
      return tagAndCountArr[0];
    });
    // return top3Tags
    return top3Tags;
};  



var genderCount = function(array){
    // declare seed, object with keys female, male, non-binary, all assigned starting value 0
    // let seed = {female: 0, male: 0, 'non-binary': 0}; 
    // return reduce function, input array, function with parameters personCount, genderValue, i
    return _.reduce(array, function(personCount, genderValue, i){
        // if array at index i gender key exists
        let tempGender = array[i].gender;
        if (personCount[tempGender]) {
            // add one to the key's number
            personCount[tempGender] += 1;
        // otherwise
        } else {
            // create that gender key in the object and assign it to 1
            personCount[tempGender] = 1; 
        } 
        // return the sum object personCount
        return personCount; 
    }, {});
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
