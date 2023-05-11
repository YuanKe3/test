/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map()
  for (let i = 0; i < nums1.length; i += 1) {
    map.set(nums1[i], true)
  }
  const res: number[] = []
  nums2.forEach(n => {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  })
  return res
}
// @lc code=end
