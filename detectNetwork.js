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
  var firstFourCardNumbers = cardNumber.slice(0, 4);
  var firstThreeCardNumbers = cardNumber.slice(0, 3);
  var firstTwoCardNumbers = cardNumber.slice(0, 2);
  var firstCardNumber = cardNumber.slice(0, 1);
  var cardLength = cardNumber.length;

  if ((firstTwoCardNumbers === '38' || firstTwoCardNumbers === '39') && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ((firstTwoCardNumbers === '34' || firstTwoCardNumbers === '37') && cardLength === 15) {
    return 'American Express';
  } else if (firstCardNumber === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19) && firstTwoCardNumbers !== '49') {
    return 'Visa';
  } else if ((firstTwoCardNumbers === '51' || firstTwoCardNumbers === '52' || firstTwoCardNumbers === '53' || firstTwoCardNumbers === '54' || firstTwoCardNumbers === '55') && cardLength === 16) {
    return 'MasterCard';
  } else if ((firstFourCardNumbers === '6011' || firstThreeCardNumbers === '644' || firstThreeCardNumbers === '645' || firstThreeCardNumbers === '646' || firstThreeCardNumbers === '647' || firstThreeCardNumbers === '648' || firstThreeCardNumbers === '649' || firstTwoCardNumbers === '65') && (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if ((firstFourCardNumbers === '5018' || firstFourCardNumbers === '5020' || firstFourCardNumbers === '5038' || firstFourCardNumbers === '6304') && (cardLength === 12 || cardLength === 13 || cardLength === 14 || cardLength === 15 || cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19)) {
    return 'Maestro';
  } else if (firstTwoCardNumbers === '62' && (cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19)) {
    return 'China UnionPay';
  } else if ((firstFourCardNumbers === '4903' || firstFourCardNumbers === '4905' || firstFourCardNumbers === '4911' || firstFourCardNumbers === '4936' || firstTwoCardNumbers === '56' || firstTwoCardNumbers === '63' || firstTwoCardNumbers === '67') && (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
    return 'Switch';
  }
};


