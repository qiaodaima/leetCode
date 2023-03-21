/**
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 */

// type ListNode = {
//   val: number;
//   next: ListNode | null;
// };

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null) {
    this.val = val;
    this.next = next || null;
  }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  const emptyHead = new ListNode(0, null);
  let fast = emptyHead;
  let slow = emptyHead;

  emptyHead.next = head;

  while (n-- && fast.next) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next!;
  }

  slow.next = slow.next!.next;

  return emptyHead.next;
};
