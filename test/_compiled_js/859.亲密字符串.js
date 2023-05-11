"use strict";
/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */
// @lc code=start
function buddyStrings(s, goal) {
    if (s.length <= 1 || goal.length <= 1)
        return false;
    if (s.length !== goal.length)
        return false;
    const sList = s.split('');
    const goalList = goal.split('');
    const tempList = [];
    let flag = 0;
    for (let i = 0; i < sList.length; i += 1) {
        if (sList[i] !== goalList[i]) {
            if (tempList.length) {
                const popS = tempList.shift();
                const popGoal = tempList.shift();
                if (popS && popGoal && popS === goalList[i] && popGoal === sList[i]) {
                    flag += 1;
                    if (flag > 1)
                        return false;
                    continue;
                }
                return false;
            }
            tempList.push(sList[i]);
            tempList.push(goalList[i]);
        }
    }
    if (flag && !tempList.length)
        return true;
    if (sList.length !== [...new Set(sList)].length && !tempList.length) {
        return true;
    }
    return false;
}
// @lc code=end
//# sourceMappingURL=859.%E4%BA%B2%E5%AF%86%E5%AD%97%E7%AC%A6%E4%B8%B2.js.map