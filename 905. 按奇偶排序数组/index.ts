/**
 * https://leetcode.cn/problems/sort-array-by-parity/
 */

const sortArrayByParity = (nums: number[]): number[] => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    //如果左边是奇数，右边是偶数，则调换顺序
    if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
      right--;
      continue;
    }

    // 如果左边是偶数
    if (nums[left] % 2 === 0) {
      left++;
    }

    // 如果右边是奇数
    if (nums[right] % 2 === 1) {
      right--;
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
