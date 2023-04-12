/**
 * https://leetcode.cn/problems/XltzEq/
 */

const isPalindrome = (s: string): boolean => {
  const arr: any[] = [];

  for (const item of s) {
    // 如果是数字
    if ('0' <= item && item <= '9') {
      arr.push(item);
    }

    // 如果是字母
    if (('a' <= item && item <= 'z') || ('A' <= item && item <= 'Z')) {
      // 不管是大写 还是小写，一律转换成小写的
      arr.push(item.toLowerCase());
    }
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
