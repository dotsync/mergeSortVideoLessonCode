/* eslint-disable no-undef */
const sorts = require('./sorts');

describe('MERGE SORT ALGORITHM', () => {
  describe('mergeTwoSortedArrays function', () => {
    test('should return an empty array if both input arrays are empty', () => {
      expect(sorts.mergeTwoSortedArrays([], [])).toStrictEqual([]);
    });
    test('should merge two sorted arrays when array 1 is empty and array 2 is full', () => {
      const actual = sorts.mergeTwoSortedArrays([], [1, 2, 3, 4, 5]);
      const expected = [1, 2, 3, 4, 5];
      expect(actual).toStrictEqual(expected);
    });
    test('should merge two sorted arrays when array 2 is empty and array 1 is full', () => {
      const actual = sorts.mergeTwoSortedArrays([1, 2, 3, 4, 5], []);
      const expected = [1, 2, 3, 4, 5];
      expect(actual).toStrictEqual(expected);
    });
    test('should merge two sorted arrays when arrays are different lengths', () => {
      const actual1 = sorts.mergeTwoSortedArrays([1, 2, 3, 4, 5], [6, 7]);
      const actual2 = sorts.mergeTwoSortedArrays([6, 7], [1, 2, 3, 4, 5]);
      const expected = [1, 2, 3, 4, 5, 6, 7];
      expect(actual1).toStrictEqual(expected);
      expect(actual2).toStrictEqual(expected);
    });
    test('should merge two sorted arrays that are the same length', () => {
      const actual = sorts.mergeTwoSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(actual).toStrictEqual(expected);
    });
  });
  // describe('mergeSortRecursive function', () => {
  //   test('should return an empty array if given an empty array as input', () => {
  //     expect(sorts.mergeSortRecursive([])).toStrictEqual([]);
  //   });
  //   test('should should sort the input array in ascending order', () => {
  //     const actual = sorts.mergeSortRecursive([1, 9, 8, 3, 6, 2, 5, 10, 4, 7]);
  //     const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     expect(actual).toStrictEqual(expected);
  //   });
  // });
});
