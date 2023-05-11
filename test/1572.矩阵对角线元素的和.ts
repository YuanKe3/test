/*
 * @lc app=leetcode.cn id=1572 lang=typescript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
function diagonalSum(mat: number[][]): number {
  const rows = mat.length
  let res = 0
  for (let i = 0, j = rows - 1; i < rows; i += 1, j -= 1) {
    res = res + mat[i][i] + mat[i][j]
  }
  if (rows % 2 !== 0) {
    let center = (rows - 1) / 2
    res -= mat[center][center]
  }
  return res
}
// @lc code=end
