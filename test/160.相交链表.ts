/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA
  let p2 = headB
  const toggleObj = {
    p1: false,
    p2: false
  }
  while (p1 || p2) {
    if (p1 === p2) return p1
    p1 = p1?.next ?? null
    p2 = p2?.next ?? null
    if (p1 == null) {
      if (toggleObj.p1) return null
      p1 = headB
      toggleObj.p1 = true
    }
    if (p2 == null) {
      if (toggleObj.p2) return null
      p2 = headA
      toggleObj.p2 = true
    }
  }
  return null
}

// const l1 = new ListNode(1, new ListNode(2, new ListNode(3, null)))
// const l2 = new ListNode(2, new ListNode(3, new ListNode(4, null)))
// console.log(getIntersectionNode(l1, l2))

// @lc code=end
