function mergeTwoSortedArrays(array1, array2) {
  const result = [];
  let array1NumIndex = 0;
  let array2NumIndex = 0;

  while (array1NumIndex < array1.length && array2NumIndex < array2.length) {
    // compare numbers
    if (array1[array1NumIndex] <= array2[array2NumIndex]) {
      result.push(array1[array1NumIndex]);
      array1NumIndex += 1;
    } else {
      result.push(array2[array2NumIndex]);
      array2NumIndex += 1;
    }
  }
  // check extra length
  while (array1NumIndex < array1.length) {
    result.push(array1[array1NumIndex]);
    array1NumIndex += 1;
  }
  while (array2NumIndex < array2.length) {
    result.push(array2[array2NumIndex]);
    array2NumIndex += 1;
  }
  return result;
}

function mergeSortRecursive(unsortedArray) {
  // base case
  if (unsortedArray.length <= 1) return unsortedArray;
  // recursive steps
  // create a mid point, left side and right side
  const mid = Math.floor(unsortedArray.length / 2);
  const leftHalf = mergeSortRecursive(unsortedArray.slice(0, mid));
  const rightHalf = mergeSortRecursive(unsortedArray.slice(mid));
  return mergeTwoSortedArrays(leftHalf, rightHalf);
}

module.exports = {
  mergeTwoSortedArrays, mergeSortRecursive,
};
