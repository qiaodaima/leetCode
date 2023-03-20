/**
 * https://leetcode.cn/problems/rotate-array/
 */

class Stack {
  data: number[] = [];

  push = (member: number) => {
    this.data.push(member);
  };

  pop = () => {
    return this.data.pop();
  };

  isEmpty = () => {
    return this.data.length === 0;
  };
}

const rotate = (nums: number[], k: number): void => {
  k = k % nums.length;

  if (k === 0) {
    return;
  }

  const move: number[] = [];

  for (let i = nums.length - k; i < nums.length; i++) {
    move.push(nums[i]);
  }

  while (k--) {
    nums.pop();
  }

  while (move.length) {
    const tail = move.pop();

    nums.unshift(tail!);
  }
};
