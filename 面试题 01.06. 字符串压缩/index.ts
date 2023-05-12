/**
 * https://leetcode.cn/problems/compress-string-lcci/
 */

const compressString = (s: string): string => {
  const resultTemp: (string | number)[] = [];
  let count = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    count++;

    if (s[i] !== s[i + 1] || i === s.length - 1) {
      resultTemp.push(s[i], count);
      count = 0;
    }
  }

  const result = resultTemp.join('');

  return result.length >= s.length ? s : result;
};

console.log(compressString('aabcccccaaa'));
console.log(compressString('abbccd'));
console.log(compressString('aabcccccaa'));
