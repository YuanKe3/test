/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 0,
    right = x
  while (left <= right) {
    if (left * left > x) {
      return left - 1
    } else if (right * right < x) {
      return right
    } else if (left * left === x) {
      return left
    } else if (right * right === x) {
      return right
    }
    left += 1
    right -= 1
  }
  return 0
}
// @lc code=end
