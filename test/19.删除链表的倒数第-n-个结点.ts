/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let pFast = head
  let pSlow = head
  while (n--) if (pFast) pFast = pFast.next
  while (pFast?.next) {
    pFast = pFast.next
    pSlow = pSlow?.next ?? null
  }
  if (pSlow) pSlow.next = pSlow?.next?.next ?? null
  return head
}
// @lc code=end
