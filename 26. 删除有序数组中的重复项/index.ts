/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */
const removeDuplicates = (nums: number[]): number => {
  let slow = 0;
  let fast = 1;

  while (fast <= nums.length - 1) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast - 1];
      slow++;
    }

    fast++;
  }

  nums[slow] = nums[fast - 1];

  return slow + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
