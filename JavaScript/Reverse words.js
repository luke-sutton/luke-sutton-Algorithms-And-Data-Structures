/* Instructions
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */


// Solution
function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Tests
console.log(reverseWords("JavaScript test one two"));


/* Solution explanation -
.split(' ') - this method creates an array of each word in the provided string by seperating them using the space
.map(word => word) - the map function processes each item in the array with the supplied functions
.split('') - this takes each letter from the supplied string and creates an array containing each letter
.reverse() - this method takes an array and reverses the contained elements
.join() - this method creates a new string using each element in the array
 */