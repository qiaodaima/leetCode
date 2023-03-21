/**
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};

const middleNode = (head: ListNode | null): ListNode | null => {
  let slowFlag = head;
  let stepCount = 0;

  while (head) {
    head = head.next;
    stepCount++;

    if (stepCount % 2 === 0) {
      slowFlag = slowFlag?.next!;
    }
  }

  return slowFlag;
};
