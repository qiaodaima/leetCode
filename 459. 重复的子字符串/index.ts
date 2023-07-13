/**
 * https://leetcode.cn/problems/repeated-substring-pattern/
 */
const repeatedSubstringPattern = (s: string): boolean => {
  // ~~是对小数进行取整，3.5 -> 3
  for (let i = 0; i < ~~(s.length / 2); i++) {
    const substring = s.substring(0, i + 1);
    const reg = new RegExp(substring, 'g');

    if (s.replace(reg, '') === '') {
      return true;
    }
  }

  return false;
};

console.log(repeatedSubstringPattern('a'));
