"use strict";
/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
// @lc code=start
function searchRange(nums, target) {
    let leftFlag = false, rightFlag = false;
    let left = 0, right = nums.length - 1;
    const res = [-1, -1];
    while (left <= right) {
        if (res[0] >= 0 && res[1] >= 0)
            break;
        if (!leftFlag) {
            if (nums[left] === target) {
                res[0] = left;
                leftFlag = true;
            }
            else {
                left++;
            }
        }
        if (!rightFlag) {
            if (nums[right] === target) {
                res[1] = right;
                rightFlag = true;
            }
            else {
                right--;
            }
        }
    }
    return res;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// @lc code=end
//# sourceMappingURL=34.%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE.js.map