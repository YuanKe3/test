/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

import LN, { ListNode } from './ListNode'

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let p = head
  while (p?.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}

const a: LN.ListNode = new ListNode(2, null)

console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, null)))))
console.log(a)

// @lc code=end
