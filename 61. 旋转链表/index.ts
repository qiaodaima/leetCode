/**
 * https://leetcode.cn/problems/rotate-list/
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  // 空节点
  if (head === null) {
    return null;
  }

  // 只有一个节点
  if (head.next === null) {
    return head;
  }

  let size = 1; // 链表长度
  let fast = head;
  let slow = head;
  let end = head; // 尾指针
  let result: ListNode;

  // 寻找尾指针位置，同时计算链表长度
  while (end.next) {
    end = end?.next;
    size++;
  }

  k = k % size; // 链表移动size次回到原始样子，所以对K进行取余数

  while (k) {
    fast = fast.next!;
    k--;
  }

  while (fast.next) {
    fast = fast?.next;
    slow = slow.next!;
  }

  end.next = head; // 尾头相连，此时链表形成环
  result = slow.next!;
  slow.next = null;

  return result;
};
