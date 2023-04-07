/**
 * https://leetcode.cn/problems/missing-number/
 */

const missingNumber = (nums: number[]): number => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  if (nums[0] !== 0) {
    return 0;
  }

  if (nums.length !== nums[nums.length - 1]) {
    return nums.length;
  }

  while (left < right) {
    const middle = parseInt(`${(left + right) / 2}`, 10);

    if (middle === nums[middle]) {
      left = middle + 1;
      continue;
    }

    if (nums[middle] > middle) {
      right = middle - 1;
    }
  }

  if (nums[left] === left) {
    return left + 1;
  }

  return left;
};

console.log(missingNumber([0, 2, 3]));
