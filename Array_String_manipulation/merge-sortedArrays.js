// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// Time - O(N)
// Space - O(N)

const mergeArrays = (arr1, arr2) => {
  const mergedArr = [];

  let currIndex1 = 0;
  let currIndex2 = 0;
  let currIndexMerged = 0;

  while (mergedArr.length < arr1.length + arr2.length) {
    const isArr1Exhausted = currIndex1 >= arr1.length;
    const isArr2Exhausted = currIndex2 >= arr2.length;

    // edge case: arr1 is exhausted
    if (!isArr1Exhausted && (isArr2Exhausted || arr1[currIndex1] < arr2[currIndex2])) {
      mergedArr[currIndexMerged] = arr1[currIndex1];
      currIndex1++;
      // arr2 is smaller
    } else {
      mergedArr[currIndexMerged] = arr2[currIndex2];
      currIndex2++;
    }
    currIndexMerged++;
  }

  return mergedArr;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
