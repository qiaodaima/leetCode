/**
 * https://leetcode.cn/problems/add-strings/
 */

const addStrings = (s1: string, s2: string): string => {
  const result: number[] = [];
  let l1 = s1.length - 1;
  let l2 = s2.length - 1;
  let add = 0; // 进位

  while (l1 >= 0 || l2 >= 0 || add > 0) {
    // 避免越界访问字符串的左边界
    const n1 = !!s1[l1] ? Number(s1[l1]) : 0;
    const n2 = !!s2[l2] ? Number(s2[l2]) : 0;

    const sum = n1 + n2 + add; // 个位和个位相加、百位和百位相加，然后再加上需要的进位数量
    const n = sum % 10; // 比如得出的结果是 8+6,那么结果就是4，进位是1(其实就是14除以10取整)

    result.push(n);
    add = (sum - n) / 10;
    l1--;
    l2--;
  }

  return result.reverse().join('');
};

console.log(addStrings('11', '123'));
console.log(addStrings('12345', '45'));
console.log(addStrings('3456', '9999'));
console.log(addStrings('3456', '0'));
console.log(addStrings('0', '3456'));
