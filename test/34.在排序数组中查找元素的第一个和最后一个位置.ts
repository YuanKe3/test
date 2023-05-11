/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let leftFlag = false,
    rightFlag = false
  let left = 0,
    right = nums.length - 1
  const res = [-1, -1]
  while (left <= right) {
    if (res[0] >= 0 && res[1] >= 0) break
    if (!leftFlag) {
      if (nums[left] === target) {
        res[0] = left
        leftFlag = true
      } else {
        left++
      }
    }
    if (!rightFlag) {
      if (nums[right] === target) {
        res[1] = right
        rightFlag = true
      } else {
        right--
      }
    }
  }
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

// @lc code=end
