/**
 * https://leetcode.cn/problems/reverse-words-in-a-string-iii/
 */

const reverseString = (s: string[], l: number, r: number): void => {
  while (l < r) {
    const temp = s[l];

    s[l] = s[r];
    s[r] = temp;

    l++;
    r--;
  }
};

const reverseWords = (s: string): string => {
  const sToArray = s.split('');
  let l = 0;
  let r = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if ((s[i] !== ' ' && s[i - 1] === ' ') || (s[i] !== ' ' && i === 0)) {
      l = i;
      continue;
    }

    if ((s[i] !== ' ' && s[i + 1] === ' ') || (s[i] !== ' ' && i === s.length - 1)) {
      r = i;
      reverseString(sToArray, l, r);
    }
  }

  return sToArray.join('');
};

console.log(reverseWords("Let's take LeetCode contest"));
