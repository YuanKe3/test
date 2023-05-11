"use strict";
/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */
// @lc code=start
class RecentCounter {
    constructor() {
        this.queue = [];
    }
    ping(t) {
        this.queue.push(t);
        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }
        return this.queue.length;
    }
}
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
//# sourceMappingURL=933.%E6%9C%80%E8%BF%91%E7%9A%84%E8%AF%B7%E6%B1%82%E6%AC%A1%E6%95%B0.js.map