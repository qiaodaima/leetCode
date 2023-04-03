/**
 * https://leetcode.cn/problems/thousand-separator/
 */

const thousandSeparator = (n: number): string => {
  const str = n.toString();
  const result: string[] = [];

  for (let i = 1; i <= str.length; i++) {
    result.push(str[str.length - i]);

    if (i % 3 === 0 && i !== str.length) {
      result.push('.');
    }
  }

  console.log(result);

  return result.reverse().join('');
};

console.log(thousandSeparator(1234));
console.log(thousandSeparator(123456));
