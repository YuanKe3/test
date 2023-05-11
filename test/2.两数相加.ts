/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let flag = 0
  function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2 && flag) return new ListNode(flag, null)
    if (!l1 && !l2) return null
    const left = l1?.val ?? 0
    const right = l2?.val ?? 0
    const val = (left + right + flag) % 10
    flag = Math.floor((left + right + flag) / 10)
    return new ListNode(val, addTwoNumbers(l1?.next ?? null, l2?.next ?? null))
  }
  return addTwoNumbers(l1, l2)
}
// @lc code=end
