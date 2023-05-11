/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
Definition for singly-linked list.
*/
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

function reverseList(head: ListNode | null): ListNode | null {
  let p1: ListNode | null = null
  let p2 = head
  while (p2?.next) {
    const temp = p2.next
    p2.next = p1
    p1 = p2
    p2 = temp
  }
  if (p2) p2.next = p1
  return p2
}

// @lc code=end
