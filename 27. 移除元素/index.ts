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

const removeElement2 = (nums: number[], val: number): number => {
  let head = 0;
  let end = nums.length - 1;

  while (head <= end) {
    if (nums[head] === val) {
      nums[head] = nums[end--];
      continue;
    }

    head++;
  }

  return head;
};
