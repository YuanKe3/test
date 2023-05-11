/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function preorderTraversal(root: TreeNode | null): Array<number> {
  const arr: Array<number> = []
  const stack: Array<TreeNode> = []
  if (root) stack.push(root)
  while (stack.length) {
    const n = stack.pop()
    if (n) arr.push(n.val)
    if (n?.right) stack.push(n.right)
    if (n?.left) stack.push(n.left)
  }
  return arr
}
// @lc code=end
