export = LN
export as namespace LN

declare namespace LN {
  export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }
}

declare interface Space {
  name: string
  setSpace(): void
}
