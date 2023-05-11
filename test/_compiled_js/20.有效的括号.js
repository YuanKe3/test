"use strict";
/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */
// @lc code=start
// ([])
function isValid(s) {
    if (s.length % 2 !== 0)
        return false;
    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            continue;
        }
        const lastItem = stack[stack.length - 1];
        if ((s[i] === ')' && lastItem === '(') || (s[i] === ']' && lastItem === '[') || (s[i] === '}' && lastItem === '{')) {
            stack.pop();
        }
        else
            return false;
    }
    return stack.length === 0;
}
console.log(isValid('(([]))'));
// @lc code=end
//# sourceMappingURL=20.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.js.map