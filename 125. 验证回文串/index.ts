/**
 * https://leetcode.cn/problems/valid-palindrome/
 */

const getStr = (s: string): string => {
  const result: string[] = [];

  for (const item of s) {
    const isNumber = '0' <= item && item <= '9';
    const lowerCase = 'a' <= item && item <= 'z';
    const capital = 'A' <= item && item <= 'Z';

    if (isNumber || lowerCase || capital) {
      let pushItem = item;

      // 如果是大写，则转成小写
      if (capital) {
        const num = item.charCodeAt(0) + 32;

        pushItem = String.fromCharCode(num);
      }

      result.push(pushItem);
    }
  }

  return result.join('');
};

const isPalindrome = (s: string): boolean => {
  const str = getStr(s);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
