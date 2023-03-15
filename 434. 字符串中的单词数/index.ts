/**
 * https://leetcode.cn/problems/number-of-segments-in-a-string/
 */

const countSegments = (s: string): number => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] !== ' ') {
      count++;
      continue;
    }

    if (s[i] !== ' ' && s[i - 1] === ' ') {
      count++;
    }
  }

  return count;
};

const s1 = 'Hello, my name is John';
const s2 = '  Hello, my name is John  ';
const s3 = '  Hello, my name is John';

console.log(countSegments(s1));
console.log(countSegments(s2));
console.log(countSegments(s3));
