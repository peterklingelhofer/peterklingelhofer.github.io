// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// define function to find obj using 3 parameters id, nameFirst, nameLast
function makeContact(id, nameFirst, nameLast) { 
   var obj = {
// find id argument in this object's id key
    id: id,         
// find nameFirst argument in this object's nameFirst key
    nameFirst: nameFirst,
// find nameLast argument in this object's nameLast key
    nameLast: nameLast                
    }
// return this object
    return obj;                                
}

// declare function makeContactList
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
// create array variable named contacts
    var contacts = [];
// return object with build in functions
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
// addContact function adds a contact to the contact list
// declares function addContact taking parameter contact
        addContact: function(contact) { 
// adds contact to end of contact list
            contacts.push(contact); 
        },
// declares removeContact function
        removeContact: function(contact) {
// deletes the contact argued by parameter
            contacts.pop(contact);
        },
// declares findContact function searches for a contact matching fullName parameter
        findContact: function(fullName) {
// moves through index of contacts list  from first to last
            for (var i = 0; i < contacts.length; i++) {
// checks if input (non case sensitive) matches string from firstName + lastName or firstName + space + lastName
               if (fullName.toLowerCase() == contacts[i].nameFirst.toLowerCase()  + ' ' + contacts[i].nameLast.toLowerCase()  || fullName == contacts[i].nameFirst.toLowerCase()  + contacts[i].nameLast.toLowerCase()) {
// if match, returns matching contact
                return contacts[i];
// if no match, returns undefined
               } else {
                   return undefined;
               }
            }
            
        },
// printAllContactNames function, with contact parameter
        printAllContactNames: function(contact) {
// create printedContactList array variable
            var printedContactList = [];
// for loop, start 0, end at length of contacts, iterating +1
            for (var i = 0; i < contacts.length; i++) {
// push contact first name, space, last name to array variable printedContactList
            printedContactList.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);
            }
// make array variable printedContactList a string with new line between each name
            return printedContactList.join("\n");
        },
}}




// YOUR CODE GOES ABOVE HERE //
// backup - last working
// function makeContact(id, nameFirst, nameLast) { // define function to find obj using 3 parameters
//   var obj = {
   
//     id: id,                           // find id argument in this object's id key
//     nameFirst: nameFirst,                // find nameFirst argument in this object's nameFirst key
//     nameLast: nameLast                // find nameLast argument in this object's nameLast key
//     }
//     return obj;                                // return this object
// }

// function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
//     var contacts = [];
    
//     return {
//         // we implemented the length api for you //
//         length: function() {
//             return contacts.length;
//         },
//         // addContact function adds a contact to the contact list
//         // declares function addContact taking parameter contact
//         addContact: function(contact) { 
//             // adds contact to end of contact list
//             contacts.push(contact); 
//         },
//         // declares removeContact function
//         removeContact: function(contact) {
//             // deletes the contact argued by parameter
//             contacts.pop(contact);
//         },
//         // declares findContact function searches for a contact matching fullName parameter
//         findContact: function(fullName) {
//             // moves through index of contacts list  from first to last
//             for (var i = 0; i < contacts.length; i++) {
//                 // checks if input (non case sensitive) matches string from firstName + lastName or firstName + space + lastName
//               if (fullName.toLowerCase() == contacts[i].nameFirst.toLowerCase()  + ' ' + contacts[i].nameLast.toLowerCase()  || fullName == contacts[i].nameFirst.toLowerCase()  + contacts[i].nameLast.toLowerCase()) {
//                 // if match, returns matching contact
//                 return contacts[i];
//                   // if no match, returns undefined
//               } else {
//                   return undefined;
//               }
//             }
            
//         }
            
        
        
        
    
// }}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}