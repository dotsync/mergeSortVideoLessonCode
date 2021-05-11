/* eslint-disable no-undef */
const mergeSort = require('./mergeSort');

describe('MERGE SORT ALGORITHM', () => {
  describe('mergeTwoSortedArrays function', () => {
    test('should return an empty array if both input arrays are empty', () => {
      expect(mergeSort.mergeSortRecursive([], [])).toStrictEqual([]);
    });
    test('should merge two sorted arrays when array 1 is empty and array 2 is full', () => {
      const actual = mergeSort.mergeTwoSortedArrays([], [1, 2, 3, 4, 5]);
      const expected = [1, 2, 3, 4, 5];
      expect(actual).toStrictEqual(expected);
    });
    test('should merge two sorted arrays when array 2 is empty and array 1 is full', () => {
      const actual = mergeSort.mergeTwoSortedArrays([1, 2, 3, 4, 5], []);
      const expected = [1, 2, 3, 4, 5];
      expect(actual).toStrictEqual(expected);
    });
    test('should merge two sorted arrays when arrays are different lengths', () => {
      const actual1 = mergeSort.mergeTwoSortedArrays([1, 2, 3, 4, 5], [6, 7]);
      const actual2 = mergeSort.mergeTwoSortedArrays([6, 7], [1, 2, 3, 4, 5]);
      const expected = [1, 2, 3, 4, 5, 6, 7];
      expect(actual1).toStrictEqual(expected);
      expect(actual2).toStrictEqual(expected);
    });
    test('should merge two sorted arrays that are the same length', () => {
      const actual = mergeSort.mergeTwoSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
      const expected = [1, 2, 3, 4, 5, 6, 7];
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('mergeSortRecursive function', () => {

  });
});
