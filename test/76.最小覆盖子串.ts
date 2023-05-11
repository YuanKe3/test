/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const map = new Map<string, number>()
  let l = 0
  let r = 0
  for (let c of t) {
    const mapValue = map.get(c) ?? 0
    map.set(c, map.has(c) ? mapValue + 1 : 1)
  }
  let res = ''
  let mapSize = map.size
  while (r < s.length) {
    const c = s[r]
    const mapValue = map.get(c) ?? 0
    if (map.has(c)) {
      map.set(c, mapValue - 1)
      if (mapValue === 0) mapSize -= 1
    }
    while (mapSize === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[l]
      const mapValue = map.get(c2) ?? 0
      if (map.has(c2)) {
        map.set(c2, mapValue + 1)
        if (mapValue === 1) mapSize += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))

// @lc code=end
