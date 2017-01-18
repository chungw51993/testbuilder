// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Grab the first 2 character
  // Check the character length
  var firstTwoCardNumbers = cardNumber.slice(0, 2);
  var cardNumberLength = cardNumber.length;

  if ((firstTwoCardNumbers === '38' || firstTwoCardNumbers === '39') && cardNumberLength === 14) {
    return 'Diner\'s Club';
  } else if ((firstTwoCardNumbers === '34' || firstTwoCardNumbers === '37') && cardNumberLength === 15) {
    return 'American Express';
  } else {
    return 'Try Different Card Numbers';
  }
};


function assertEqual (actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED "' + testName + '" expected "' + expected +'" but got "' + actual + '"');
  }
}

assertEqual (detectNetwork('343456789012345'), 'American Express', 'it passes if the card is American Express');