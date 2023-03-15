/**
 * https://leetcode.cn/problems/palindrome-number/
 */

const isPalindrome = (n: number): boolean => {
  if (n < 0) {
    return false;
  }

  const s = n.toString();
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
};

const n1 = 121;
const n2 = 1441;
const n3 = 0;
const n4 = -121;
const n5 = 1002;
const n6 = 345;

console.log(isPalindrome(n1));
console.log(isPalindrome(n2));
console.log(isPalindrome(n3));
console.log(isPalindrome(n4));
console.log(isPalindrome(n5));
console.log(isPalindrome(n6));
