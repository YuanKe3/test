"use strict";
/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */
// @lc code=start
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function postorderTraversal(root) {
    const arr = [];
    const stack = [];
}
// @lc code=end
//# sourceMappingURL=145.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86.js.map