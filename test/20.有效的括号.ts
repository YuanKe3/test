/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
// ([])
function isValid(s: string): boolean {
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])
  const stack: string[] = []
  let top: string | undefined
  for (let char of s) {
    const value = map.get(char)
    if (value) {
      stack.push(value)
    } else {
      top = stack.pop()
      if (top !== char) return false
    }
  }
  return stack.length === 0
}

// @lc code=end
