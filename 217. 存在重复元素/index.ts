/**
 * https://leetcode.cn/problems/contains-duplicate/
 */

const containsDuplicate = (nums: number[]): boolean => {
  const map: any = {};

  for (let i = 0; i < nums.length; i++) {
    // 这个位置被标记过
    if (map[nums[i]] === true) {
      return true;
    }

    map[nums[i]] = true;
  }

  return false;
};
