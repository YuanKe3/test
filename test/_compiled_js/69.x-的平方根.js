"use strict";
/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */
// @lc code=start
function mySqrt(x) {
    let left = 0, right = x;
    while (left <= right) {
        if (left * left > x) {
            return left - 1;
        }
        else if (right * right < x) {
            return right;
        }
        else if (left * left === x) {
            return left;
        }
        else if (right * right === x) {
            return right;
        }
        left += 1;
        right -= 1;
    }
    return 0;
}
// @lc code=end
//# sourceMappingURL=69.x-%E7%9A%84%E5%B9%B3%E6%96%B9%E6%A0%B9.js.map