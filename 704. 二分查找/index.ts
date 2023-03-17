/**
 * https://leetcode.cn/problems/binary-search/description/
 */

const search = (nums: number[], target: number) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = parseInt(`${(l + r) / 2}`, 10);

    if (nums[m] === target) {
      return m;
    }

    if (target > nums[m]) {
      l = m + 1;
    }

    if (target < nums[m]) {
      r = m - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12, 16], 2));
console.log(search([-1, 0, 3, 5, 9, 12, 16], 3));
console.log(search([-8, -1, 0, 3, 5, 9, 12, 16], 3));
