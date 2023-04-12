/**
 * https://leetcode.cn/problems/remove-duplicate-node-lcci/
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const removeDuplicateNodes = (head: ListNode | null): ListNode | null => {
  const emptyHead = new ListNode(0, null);
  const map = new Map();
  let slow = emptyHead!;
  let fast = head;

  while (fast) {
    const isNotFind = map.has(fast.val);

    // 这个元素不是重复元素
    if (isNotFind === false) {
      map.set(fast.val, fast.val);

      slow.next = fast;
      slow = slow.next;
    }

    fast = fast.next;
  }

  slow.next = null;

  return emptyHead.next;
};
