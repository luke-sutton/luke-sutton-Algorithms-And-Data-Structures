/* Instructions
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/


// Solution
function createPhoneNumber(numbers){
  numbers.unshift("(");
  numbers[3] = numbers[3] + ") ";
  numbers[6] = numbers[6] + "-";
  return numbers.join('');
}


// Tests
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/* Solution explanation
numbers.unshift("(") - unshift adds a new element to the begining of an array
numbers[3] = numbers[3] + ") " - new elements are inserted into the array using concatenation
numbers.join('') - elements are joined into one string
*/