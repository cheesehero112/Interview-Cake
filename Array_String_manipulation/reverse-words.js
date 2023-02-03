// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

// Space: O(1)
// Time: O(N)

// input: Array of strings and spaces
// output: Array of strings and spaces in reverse in place
const reverseWords = (msgArr) => {
  // reverse every word
  reverseChars(msgArr, 0, msgArr.length - 1);

  // reverse each word
  let currWordStartIndex = 0;

  for (let i = 0; i <= msgArr.length; i++) {
    // find the end of the current word
    if (i === msgArr.length || msgArr[i] === ' ') {
      reverseChars(msgArr, currWordStartIndex, i - 1);
      currWordStartIndex = i + 1;
    }
  }

  // reverse charater helper function
  function reverseChars(msg, left, right) {
    //iterate the joined, swap left & right
    while (left < right) {
      console.log(left, right);
      const temp = msg[left];
      msg[left] = msg[right];
      msg[right] = temp;

      left++;
      right--;
    }
  }

  // return arr

  return msgArr;
};

// Example
const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];

reverseWords(message);

console.log(message.join('')); // Prints: 'steal pound cake'
