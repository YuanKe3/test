"use strict";
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
function getIntersectionNode(headA, headB) {
    var _a, _b;
    let p1 = headA;
    let p2 = headB;
    const toggleObj = {
        p1: false,
        p2: false
    };
    while (p1 !== p2) {
        p1 = (_a = p1 === null || p1 === void 0 ? void 0 : p1.next) !== null && _a !== void 0 ? _a : null;
        p2 = (_b = p2 === null || p2 === void 0 ? void 0 : p2.next) !== null && _b !== void 0 ? _b : null;
        if (!p1) {
            if (!toggleObj.p1) {
                p1 = headB;
            }
            else {
                p1 = headA;
            }
            toggleObj.p1 = !toggleObj.p1;
        }
        if (!p2) {
            if (!toggleObj.p2) {
                p2 = headA;
            }
            else {
                p2 = headB;
            }
            toggleObj.p2 = !toggleObj.p2;
        }
        if (p1 === headA && p2 === headB)
            return null;
    }
    return p1;
}
// const l1 = new ListNode(1, new ListNode(2, new ListNode(3, null)))
// const l2 = new ListNode(2, new ListNode(3, new ListNode(4, null)))
// console.log(getIntersectionNode(l1, l2))
// @lc code=end
//# sourceMappingURL=160.%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8.js.map