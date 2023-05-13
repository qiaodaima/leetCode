/**
 * https://leetcode.cn/problems/sort-array-by-parity-ii/
 */

const sortArrayByParityII = (nums: number[]): number[] => {
  let even = 0;
  let odd = 1;

  while (even <= nums.length - 1 && odd <= nums.length - 1) {
    if (nums[even] % 2 === 0) {
      even += 2;
    }

    if (nums[odd] % 2 === 1) {
      odd += 2;
    }

    if (nums[even] % 2 === 1 && nums[odd] % 2 === 0) {
      const temp = nums[even];

      nums[even] = nums[odd];
      nums[odd] = temp;
    }
  }

  return nums;
};
