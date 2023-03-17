/**
 * https://leetcode.cn/problems/search-insert-position/?envType=study-plan&id=suan-fa-ru-men&plan=algorithms&plan_progress=xhfk6m5c
 */

const searchInsert = (nums: number[], target: number) => {
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

  return l;
};

console.log(searchInsert([1, 3, 5, 6], 2));
