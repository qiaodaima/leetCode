/**
 * https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */

const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  let targetIndex = -1;
  let count = 0;

  while (left <= right) {
    const middle = parseInt(`${(left + right) / 2}`, 10);

    if (nums[middle] === target) {
      targetIndex = middle;
      count = 1;
      break;
    }

    if (target < nums[middle]) {
      right = middle - 1;
    }

    if (target > nums[middle]) {
      left = middle + 1;
    }
  }

  // 没找到
  if (targetIndex === -1) {
    return 0;
  }

  left = targetIndex - 1;
  right = targetIndex + 1;

  while (nums[left] === target || nums[right] === target) {
    if (left >= 0 && nums[left] === target) {
      count++;
      left--;
    }

    if (right <= nums.length - 1 && nums[right] === target) {
      count++;
      right++;
    }
  }

  return count;
};

console.log(search([1], 1));
