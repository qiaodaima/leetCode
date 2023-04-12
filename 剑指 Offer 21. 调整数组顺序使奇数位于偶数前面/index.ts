/**
 * https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 */

const exchange = (nums: number[]): number[] => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // 左边是偶数，右边是奇数，则互换
    if (nums[left] % 2 === 0 && nums[right] % 2 === 1) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }

    // 左边是奇数
    if (nums[left] % 2 === 1) {
      left++;
    }

    // 右边是偶数
    if (nums[right] % 2 === 0) {
      right--;
    }
  }

  return nums;
};

console.log(exchange([11, 9, 3, 7, 16, 4, 2, 0]));
