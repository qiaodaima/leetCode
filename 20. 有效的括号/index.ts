/**
 * https://leetcode.cn/problems/valid-parentheses/
 */

class Stack {
  data: string[] = [];

  push = (member: string) => {
    this.data.push(member);
  };

  pop = () => {
    return this.data.pop();
  };

  isEmpty = () => {
    return this.data.length === 0;
  };
}

const map = {
  '(': ')',
  '{': '}',
  '[': ']',
};

const isValid = (s: string) => {
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (['(', '{', '['].includes(s[i])) {
      stack.push(s[i]);
    } else {
      // 避免栈为空还执行出栈操作
      if (stack.isEmpty()) {
        return false;
      }

      const head = stack.pop();

      if (map[head as keyof typeof map] !== s[i]) {
        return false;
      }
    }
  }

  return stack.isEmpty() ? true : false;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('('));
console.log(isValid('}'));
