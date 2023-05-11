/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  function fn(arr: number[][], level: number, index: number): number {
    if (level === arr.length - 1) {
      return arr[level][index]
    }
    let v = arr[level][index]
    let left = fn(arr, level + 1, index)
    let right = fn(arr, level + 1, index + 1)
    return Math.min(left, right) + v
  }
  return fn(triangle, 0, 0)
}
// @lc code=end
