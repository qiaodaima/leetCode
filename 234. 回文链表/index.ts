/**
 * https://leetcode.cn/problems/palindrome-linked-list/
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};

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

const isPalindrome = (head: ListNode | null): boolean => {
  const s = new Stack();
  let headCopy = head; // TODO:这里这样做应该是错的，这是引用赋值

  while (headCopy) {
    s.push(headCopy.val);
    headCopy = headCopy.next;
  }

  while (head) {
    if (s.pop() !== head.val) {
      return false;
    }

    head = head.next;
  }

  return true;
};
