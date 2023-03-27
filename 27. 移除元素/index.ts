/**
 * https://leetcode.cn/problems/remove-element/
 */

const removeElement = (nums: number[], val: number): number => {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
  }

  return slow;
};
