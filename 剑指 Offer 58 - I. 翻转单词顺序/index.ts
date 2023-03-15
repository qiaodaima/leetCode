/**
 * https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 */

const getWords = (s: string): string[] => {
  const result: string[] = [];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < s.length; i++) {
    // 寻找单词的起始坐标，即该位置不是空格，但是它左边是空格
    // 考虑左边没有多余空格的边界情况
    if ((s[i] !== ' ' && s[i - 1] === ' ') || (i === 0 && s[i] !== ' ')) {
      startIndex = i;
    }

    // 寻找单词的末尾坐标，即该位置不是空格，但是它右边是空格
    // 考虑右边没有多余空格的边界情况
    if ((s[i] !== ' ' && s[i + 1] === ' ') || (i === s.length - 1 && s[i] !== ' ')) {
      endIndex = i;
      result.push(s.slice(startIndex, endIndex + 1));
    }
  }

  return result;
};

const reverseArray = (a: any[]): string[] => {
  const result: any[] = [];
  let index = a.length - 1;

  while (index >= 0) {
    result.push(a[index]);
    index--;
  }

  return result;
};

const reverseWords = (s: string): string => {
  const words = getWords(s);
  const wordsReverse = reverseArray(words);
  return wordsReverse.join(' ');
};

const s1 = 'the sky is blue';
const s2 = '  hello world!  ';
const s3 = 'a good   example';

console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));
