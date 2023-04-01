/**
 * https://leetcode.cn/problems/two-sum/
 */

const twoSum = (nums: number[], target: number): number[] | void => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const twoSum1 = (nums: number[], target: number): number[] | void => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const find = target - nums[i];
    const result = map.has(find) ? map.get(find) : -1;

    if (result >= 0 && result !== i) {
      return [i, result];
    }
  }
};
