/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
  q: Array<number>
  constructor() {
    this.q = []
  }
  ping(t: number): number {
    this.q.push(t)
    while (this.q[0] < t - 3000) {
      this.q.shift()
    }
    return this.q.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
