/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  nums.forEach((num, index) => {
    const currentNum = num
    const anotherNum = target - currentNum
    if (map.has(anotherNum)) {
      return [map.get(anotherNum), index]
    } else {
      map.set(currentNum, index)
    }
  })
  return []
}
// @lc code=end
