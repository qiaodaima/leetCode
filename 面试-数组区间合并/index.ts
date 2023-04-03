/**
 * 输入：[1, 2, 3, 4, 6, 8, 9, 10]
 * 输出：['1-4', 6, '8-10']
 */

const getResult = (nums: number[]): string[] => {
  const result: string[] = [];
  let slow = 0;
  let fast = slow + 1;

  // 其实这里越界访问了 不知道这么写是否规范以及合理
  while (fast <= nums.length) {
    // 说明 fast 处已经断开  上一个区间为 [slow, fast - 1]
    if (nums[fast] - nums[fast - 1] !== 1) {
      if (slow !== fast - 1) {
        result.push(`${nums[slow]}-${nums[fast - 1]}`);
      } else {
        result.push(`${nums[slow]}`);
      }

      slow = fast;
    }

    fast++;
  }

  return result;
};

console.log(getResult([1, 2, 3, 4, 6, 8, 9, 10]));
console.log(getResult([1, 2, 3, 4, 6]));
console.log(getResult([1, 2, 3, 4]));
console.log(getResult([1]));
console.log(getResult([1, 3, 5, 7, 9]));
