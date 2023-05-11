/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let mid: number,
    left = 0,
    right = nums.length - 1
  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] < target) left = mid + 1
    else if (nums[mid] > target) right = mid - 1
    else return mid
  }
  return left
}
// @lc code=end
