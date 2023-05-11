declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
    }
  }
  interface Array {
    bubbleSort<any>(): Array<T>
  }
  interface Function {
    bind1(...args: any[]): any
  }
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }
}

// 当一个声明文件中没有导出任何内容时，TypeScript 编译器会认为这个文件是一个空文件，不会将它包含在最终的编译输出中。但是，如果你在一个声明文件中只导出了类型声明，而没有导出具体的变量或函数，那么 TypeScript 编译器可能会发出一个警告
export {}
