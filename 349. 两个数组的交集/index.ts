/**
 * https://leetcode.cn/problems/intersection-of-two-arrays/
 */

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const shortMap: Map<number, Boolean> = new Map();
  const [short, long] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  const result: number[] = [];

  for (const item of short) {
    shortMap.set(item, false);
  }

  for (const item of long) {
    if (shortMap.has(item)) {
      shortMap.set(item, true);
    }
  }

  for (const [key, value] of shortMap) {
    if (value) {
      result.push(key);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
