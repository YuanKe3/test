"use strict";
/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
// @lc code=start
function searchInsert(nums, target) {
    let mid, left = 0, right = nums.length - 1;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            return mid;
    }
    return left;
}
// @lc code=end
//# sourceMappingURL=35.%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE.js.map