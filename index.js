function isPalindrome(word) {
  
  // find the length of a string
  const len = word.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }
  return true;
}

// isPalindrome('list');

/* 
  Add your pseudocode here

  function
  check string length
  check beginning through middle character
  check end through middle character
  If beginning and end are equal true, if not false
*/

/*
  Add written explanation of your solution here

  Create a function that determines whehter a word is a palindrome, returning a true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
