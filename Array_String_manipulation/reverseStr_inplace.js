// Write a function that takes an array of characters and reverses the letters in place.

const reverse = (arrOfChars) => {
  let leftIndex = 0;
  let rightIndex = arrOfChars.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arrOfChars[leftIndex];
    arrOfChars[leftIndex] = arrOfChars[rightIndex];
    arrOfChars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
};

// Tests //
const hello = ['h', 'e', 'l', 'l', 'o'];
console.log(hello);
reverse(hello);
console.log(hello);
