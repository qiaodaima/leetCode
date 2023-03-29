/**
 * https://leetcode.cn/problems/move-zeroes/
 */

const moveZeroes = (nums: number[]): void => {
  let slow = 0;
  let fast = 0;

  while (slow <= nums.length - 1 || fast <= nums.length - 1) {
    // 当快指针没跑完的时候
    if (fast <= nums.length - 1) {
      if (nums[fast] !== 0) {
        nums[slow] = nums[fast];
        slow++;
      }

      fast++;
    }
    // 快指针跑完了，那么慢指针后面应该全部都是0
    else {
      nums[slow] = 0;
      slow++;
    }
  }
};
