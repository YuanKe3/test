"use strict";
/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */
// @lc code=start
function lemonadeChange(bills) {
    for (let i = 0; i < bills.length; i += 1) {
        if (bills[i] - 5 === 0)
            continue;
        const findNum = bills.indexOf(bills[i] - 5);
        if (findNum >= 0) {
            bills.splice(findNum, 1);
            continue;
        }
        return false;
    }
    return true;
}
// @lc code=end
//# sourceMappingURL=860.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.js.map