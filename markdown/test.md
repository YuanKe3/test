- [1.React 基础](#1react-基础)
  - [1.1 React 开始](#11-react-开始)
  - [1.2 jsx 规则](#12-jsx-规则)
  - [1.3 jsx 区分表达式和语句](#13-jsx-区分表达式和语句)
- [2.组件](#2组件)
  - [2.1 函数式组件](#21-函数式组件)
  - [2.2 类式组件](#22-类式组件)
  - [2.3 组件实例的三大属性之一 - state](#23-组件实例的三大属性之一---state)
  - [2.4 三大属性之一 - props](#24-三大属性之一---props)
  - [2.5 三大属性之一 - ref](#25-三大属性之一---ref)
  - [2.6 react 中的事件处理](#26-react-中的事件处理)
  - [2.7 非受控组件](#27-非受控组件)
  - [2.8 受控组件](#28-受控组件)
  - [2.9 函数柯里化](#29-函数柯里化)
  - [2.10 不用柯里化实现保存 state](#210-不用柯里化实现保存-state)
  - [2.11 兄弟间传递值(github 搜索案例)](#211-兄弟间传递值github-搜索案例)
- [3.生命周期](#3生命周期)
  - [3.1 生命周期示例图片](#31-生命周期示例图片)
  - [3.2 生命周期 - 旧 - 挂载](#32-生命周期---旧---挂载)
  - [3.3 生命周期 - 旧 - 更新](#33-生命周期---旧---更新)
  - [3.4 生命周期 - 旧 - 总结](#34-生命周期---旧---总结)
  - [3.5 生命周期 - 新](#35-生命周期---新)
  - [3.6 DOM 的 diffing 算法](#36-dom-的-diffing-算法)
- [4.脚手架](#4脚手架)
  - [4.1 一些基本文件](#41-一些基本文件)
  - [4.2 一些插件提供的代码片段](#42-一些插件提供的代码片段)
- [5.axios](#5axios)
  - [5.1 跨域](#51-跨域)
  - [5.2 连续解构赋值知识补充](#52-连续解构赋值知识补充)
  - [5.3 案例: 调用 github 的搜索 api](#53-案例-调用-github-的搜索-api)
  - [5.4 fetch](#54-fetch)
- [6.路由](#6路由)
  - [6.1 Link、Route](#61-linkroute)
  - [6.2 NavLink](#62-navlink)
  - [6.3 插槽功能的实现(封装 MyNavLink)](#63-插槽功能的实现封装-mynavlink)
  - [6.4 Switch](#64-switch)
  - [6.5 history 的资源丢失问题](#65-history-的资源丢失问题)
  - [6.6 严格匹配 / 模糊匹配](#66-严格匹配--模糊匹配)
  - [6.7 Redirect](#67-redirect)
  - [6.8 嵌套路由](#68-嵌套路由)
  - [6.9 向路由组件传递 params 参数](#69-向路由组件传递-params-参数)
  - [6.10 push 与 replace](#610-push-与-replace)
  - [6.11 编程式路由导航](#611-编程式路由导航)
  - [6.12 withRouter 的使用](#612-withrouter-的使用)
- [7.Antd](#7antd)
  - [7.1 按需引入](#71-按需引入)
  - [7.2 自定义主题](#72-自定义主题)
- [8.redux](#8redux)
  - [8.1 三个核心概念](#81-三个核心概念)
  - [8.2 求和案例 - 纯 react 版](#82-求和案例---纯-react-版)
  - [8.3 基本使用](#83-基本使用)
  - [8.4 异步 action](#84-异步-action)
- [9.react-redux](#9react-redux)
  - [9.1 基本使用](#91-基本使用)
  - [9.2 整合 UI 组件和容器](#92-整合-ui-组件和容器)
  - [9.3 优化总结](#93-优化总结)
  - [9.4 纯函数](#94-纯函数)
  - [9.5 开发者工具](#95-开发者工具)
  - [9.6 上线打包](#96-上线打包)
- [10.拓展](#10拓展)
  - [10.1 setState 的两种写法](#101-setstate-的两种写法)
  - [10.2 lazyLoad](#102-lazyload)
  - [10.3 hooks](#103-hooks)
  - [10.4 useEffect](#104-useeffect)
  - [10.5 useRef](#105-useref)
  - [10.6 Fragment 和空标签](#106-fragment-和空标签)
  - [10.7 Context(类似于 provide、inject)](#107-context类似于-provideinject)
  - [10.8 组件优化](#108-组件优化)
  - [10.9 render props](#109-render-props)
  - [10.10 错误边界](#1010-错误边界)
- [11.新版本路由](#11新版本路由)
  - [11.1 Routes 替代 Switch](#111-routes-替代-switch)
  - [11.2 Navigate 替代 redirect](#112-navigate-替代-redirect)
  - [11.3 NavLink 的高亮](#113-navlink-的高亮)
  - [11.4 路由表](#114-路由表)
  - [11.5 嵌套路由](#115-嵌套路由)
  - [11.6 路由传参](#116-路由传参)
  - [11.7 编程式路由导航](#117-编程式路由导航)
  - [11.8 useInRouterContext()](#118-useinroutercontext)
  - [11.9 useNavigationType()](#119-usenavigationtype)
  - [11.10 useOutlet()](#1110-useoutlet)
  - [11.11 useResolvedPath()](#1111-useresolvedpath)
- [12.前置准备](#12前置准备)
  - [12.1 初始化](#121-初始化)
  - [12.2 mock 方案](#122-mock-方案)
  - [12.3 用 jsx 写一个工程列表功能](#123-用-jsx-写一个工程列表功能)
  - [12.4 自定义防抖 hook 和 useMount 的 hook](#124-自定义防抖-hook-和-usemount-的-hook)
  - [12.5 commit 提交规范](#125-commit-提交规范)
- [13.TypeScript](#13typescript)
  - [13.1 js 改造成 ts](#131-js-改造成-ts)
  - [13.2 Hook - 泛型 - 数组操作 demo(重要)](#132-hook---泛型---数组操作-demo重要)
  - [13.3 TypeScript 的鸭子类型](#133-typescript-的鸭子类型)
  - [13.4 json-server 注入登录中间件](#134-json-server-注入登录中间件)
  - [13.5 auth 服务文件开发](#135-auth-服务文件开发)
  - [13.6 point free 风格](#136-point-free-风格)
  - [13.7 封装 fetch 请求方法](#137-封装-fetch-请求方法)
  - [13.8 使用 useContext 管理登录相关逻辑](#138-使用-usecontext-管理登录相关逻辑)
  - [13.9 TS 的联合类型、Partial 和 Omit 介绍](#139-ts-的联合类型partial-和-omit-介绍)
  - [13.10 一些 utility type 的源码实现](#1310-一些-utility-type-的源码实现)

## 1.React 基础

### 1.1 React 开始

**写法一 - jsx 创建虚拟 DOM**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello react</title>
  </head>
  <body>
    <div id="test"></div>

    <!-- 引入 react 核心库 -->
    <script src="./js/react.development.js"></script>
    <!-- 引入 react-dom,用于支持 react 操作 DOM -->
    <script src="./js/react-dom.development.js"></script>
    <!-- 引入 babel,用于将 jsx 转为 js -->
    <script src="./js/babel.min.js"></script>

    <script type="text/babel">
      /* 此处一定要写 babel */
      // 1.创建虚拟 DOM
      const VDOM = <h1>Hello,React</h1>
      // 2.渲染虚拟 DOM 到页面
      ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
  </body>
</html>
```

**写法二 - js 创建虚拟 DOM**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello react</title>
  </head>
  <body>
    <div id="test"></div>

    <!-- 引入 react 核心库 -->
    <script src="./js/react.development.js"></script>
    <!-- 引入 react-dom,用于支持 react 操作 DOM -->
    <script src="./js/react-dom.development.js"></script>

    <script type="text/javascript">
      // 1.创建虚拟 DOM,createElement(标签名,标签属性,标签内容)
      const VDOM = React.createElement(
        'h1',
        {
          id: 'title'
        },
        'hello React'
      )
      // 2.渲染虚拟 DOM 到页面
      ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
  </body>
</html>
```

<br>

### 1.2 jsx 规则

- 定义虚拟 DOM 时,不要写引号
- 标签内混入 js 表达式用花括号
- 样式的类名指定不用 `class`,而用 `className`
- 内联样式要用 `style={{key: value}}` 的形式写
- 虚拟 DOM 必须只有一个根标签
- 标签必须闭合
- 标签首字母:
  - 如果小写字母开头,则将该标签转为 html 转为 html 同名标签;若无,报错
  - 大写开头,react 就去渲染对应的组件,若组件未定义,则报错

<br>

### 1.3 jsx 区分表达式和语句

> {} 中只能写表达式

**表达式**:

> 一个表达式会产生一个值,可以放在任何一个需要值的地方

- `a`
- `a + b`
- `demo()`
- `arr.map()`
- `function test() {}`

**语句(代码)**:

- `if () {}`
- `for () {}`
- `switch () {}`

---

**渲染无序列表练习**:

```html
<body>
  <div id="test"></div>

  <!-- 引入 react 核心库 -->
  <script src="./js/react.development.js"></script>
  <!-- 引入 react-dom,用于支持 react 操作 DOM -->
  <script src="./js/react-dom.development.js"></script>
  <!-- 引入 babel,用于将 jsx 转为 js -->
  <script src="./js/babel.min.js"></script>

  <script type="text/babel">
    /* 此处一定要写 babel */
    // 模拟一些数据
    const data = ['Angular', 'React', 'Vue']
    const obj = {
      name1: 'Angular',
      name2: 'React',
      name3: 'Vue'
    }
    const VDOM = (
      <div>
        <h1>前端 js 框架列表</h1>
        <ul>
          {data.map((item, index) => {
            // 其实不建议使用 index 作为 key
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
    ReactDOM.render(VDOM, document.getElementById('test'))
  </script>
</body>
```

<br>

## 2.组件

### 2.1 函数式组件

**简单 demo**:(无 state)

```jsx
// 1.创建函数式组件
function MyComponent() {
  console.log(this) // 此处的 this 是 undefined,因为 babel 编译后开启了严格模式
  return <h2>我是用函数定义的组件(适用于简单组件的定义)</h2>
}
// 2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById('test'))

/*
	执行了 2 之后,发生了什么?
	1.解析组件标签,找到 MyComponent 组件
	2.发现组件是函数定义的,然后调用该函数,将返回的虚拟 DOM 转为真实 DOM,然后呈现到页面中
*/
```

<br>

### 2.2 类式组件

**简单 demo**:(有 state)

```jsx
// 1.创建类式组件
class MyComponent extends React.Component {
  // render 放在 MyComponent 的原型对象上,供实例使用
  // render 中的 this -> MyComponent 组件实例对象上
  render() {
    console.log(this)
    return <h2>我是用类定义的组件(适用于复杂组件的定义)</h2>
  }
}
// 2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById('test'))

/*
  执行了 2 之后,发生了什么?
  1.解析组件标签,找到 MyComponent 组件
  2.发现组件是使用类定义的,随后 new 出来该类的实例,并通过该实例调用原型上的 render 方法
  3.将 render 返回的虚拟 DOM 转为真实 DOM,随后呈现到页面中
*/
```

**简写**:

```tsx
class Weather extends React.Component {
  state = {
    isHot: false,
    wind: '微风'
  }

  render() {
    const { isHot, wind } = this.state
    return (
      <h1 id='title' onClick={this.changeWeather}>
        今天天气很{isHot ? '炎热' : '凉爽'}, {wind}
      </h1>
    )
  }

  // 自定义方法 --- 赋值语句 + 箭头函数
  changeWeather = () => {
    console.log(this)
  }
}
ReactDOM.render(<Weather />, document.getElementById('test'))
```

<br>

### 2.3 组件实例的三大属性之一 - state

> 很重要

```jsx
// 1.创建组件
class Weather extends React.Component {
  // 构造器调用了 1 次
  constructor(props) {
    super(props)
    // 初始化状态
    this.state = {
      isHot: false,
      wind: '微风'
    }
    // 解决 changeWeather 中 this 指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }
  // render 调用 1 + n 次,1 是初始化那次,n 是状态更新的次数
  render() {
    const { isHot, wind } = this.state
    return (
      // 不能写成 demo()
      <h1 id='title' onClick={this.changeWeather}>
        今天天气很{isHot ? '炎热' : '凉爽'}, {wind}
      </h1>
    )
  }
  // 点几次,调用几次
  changeWeather() {
    // 由于 changeWeather 是作为 onClick 的回调,所以不是通过实例调用的,是直接调用
    // 类中的方法默认开启了局部的严格模式,所以 changeWeather 中的 this 为 undefined
    const isHot = this.state.isHot
    // this.state.isHot = !isHot // 错误写法

    // 严重注意: 状态 state 不能直接更改!!!要用 setState
    // 更新是一种合并,不是替换
    this.setState({ isHot: !isHot })
  }
}
// 2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById('test'))
```

<br>

### 2.4 三大属性之一 - props

> `constructor(props) { super(props) }` 写了,则在构造器中可以用 `this.props.xxx` 获取传来的数据.构造器是否接受 props,是否传递给 super,取决于: 是否希望在构造器中通过 this 访问 props

**基本代码**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello react</title>
  </head>

  <body>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>

    <!-- 引入 react 核心库 -->
    <script src="./js/react.development.js"></script>
    <!-- 引入 react-dom,用于支持 react 操作 DOM -->
    <script src="./js/react-dom.development.js"></script>
    <!-- 引入 babel,用于将 jsx 转为 js -->
    <script src="./js/babel.min.js"></script>

    <script type="text/babel">
      class Person extends React.Component {
        render() {
          const { name, sex, age } = this.props
          return (
            <ul>
              <li>姓名:{name}</li>
              <li>性别:{sex}</li>
              <li>年龄:{age}</li>
            </ul>
          )
        }
      }
      // 这里的 age={19} 才是传递了数字类型
      ReactDOM.render(<Person name='tom' age={19} sex='女' />, document.getElementById('test1'))
      ReactDOM.render(<Person name='jerry' age={19} sex='男' />, document.getElementById('test2'))
      ReactDOM.render(<Person name='ben' age='17' sex='女' />, document.getElementById('test3'))
    </script>
  </body>
</html>
```

**批量传数据**:

```jsx
const p = { name: '老牛', age: 18, sex: '女' }
ReactDOM.render(<Person {...p} />, document.getElementById('test3'))
```

**对 props 进行限制**:

```jsx
// 对标签属性进行类型、必要性的性质
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number,
  speak: PropTypes.func
}
// 指定默认标签属性值
Person.defaultProps = {
  sex: '不男不女',
  age: 188
}

ReactDOM.render(<Person name='tom' age={18} speak={speak} />, document.getElementById('test1'))
ReactDOM.render(<Person name='jerry' age={19} sex='男' />, document.getElementById('test2'))
const p = { name: '老牛', age: 18, sex: '女' }
ReactDOM.render(<Person {...p} />, document.getElementById('test3'))

function speak() {
  console.log('我说话了')
}
```

**props 简写**:

```jsx
class Person extends React.Component {
  // 对标签属性进行类型、必要性的性质
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func
  }
  // 指定默认标签属性值
  static defaultProps = {
    sex: '不男不女',
    age: 188
  }
  render() {
    const { name, sex, age } = this.props
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>性别:{sex}</li>
        <li>年龄:{age}</li>
      </ul>
    )
  }
}

ReactDOM.render(<Person name='tom' age={18} speak={speak} />, document.getElementById('test1'))
ReactDOM.render(<Person name='jerry' age={19} sex='男' />, document.getElementById('test2'))
const p = { name: '老牛', age: 18, sex: '女' }
ReactDOM.render(<Person {...p} />, document.getElementById('test3'))

function speak() {
  console.log('我说话了')
}
```

**函数式组件的 props**:

```jsx
function Person(props) {
  const { name, age, sex } = props
  return (
    <ul>
      <li>姓名:{name}</li>
      <li>性别:{sex}</li>
      <li>年龄:{age}</li>
    </ul>
  )
}
// 对标签属性进行类型、必要性的性质
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number
}
// 指定默认标签属性值
Person.defaultProps = {
  sex: '男',
  age: 188
}
```

<br>

### 2.5 三大属性之一 - ref

> 勿过度使用 ref

**第一种形式 - 字符串形式 ref**:

> 要废除了,字符串形式的 ref

```jsx
class Demo extends React.Component {
  // 展示左侧输入框的数据
  showData = () => {
    const { input1 } = this.refs
    alert(input1.value)
  }
  // 展示左侧输入框的数据
  showData2 = () => {
    const { input2 } = this.refs
    alert(input2.value)
  }
  render() {
    return (
      <div>
        <input ref='input1' type='text' placeholder='点击按钮提示数据' />
        &nbsp;
        <button ref='button100' onClick={this.showData}>
          点我提示左侧的数据
        </button>
        &nbsp;
        <input ref='input2' onBlur={this.showData2} type='text' placeholder='失去焦点提示数据' />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('test'))
```

**第二种形式 - 回调形式 ref**:

> 更新数据时会触发两次回调函数.这是因为每次渲染时会创建一个新的函数实例,所以 React 清空旧的 ref 并且设置新的

- 内联函数方式:

> 会有上面引言的问题

```jsx
class Demo extends React.Component {
  // 展示左侧输入框的数据
  showData1 = () => {
    // const { input1 } = this.refs
    // alert(input1.value)
    const { input1 } = this
    alert(input1.value)
  }
  // 展示左侧输入框的数据
  showData2 = () => {
    // const { input2 } = this.refs
    // alert(input2.value)
    const { input2 } = this
    alert(input2.value)
  }
  render() {
    return (
      <div>
        <input ref={c => (this.input1 = c)} type='text' placeholder='点击按钮提示数据' />
        &nbsp;
        <button onClick={this.showData1}>点我提示左侧的数据</button>&nbsp;
        <input
          onBlur={this.showData2}
          ref={c => (this.input2 = c)}
          type='text'
          placeholder='失去焦点提示数据'
        />
        &nbsp;
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('test'))
```

- 绑定函数方式

```jsx
class Demo extends React.Component {
  state = {
    isHot: false
  }
  showInfo = () => {
    const { input1 } = this
    alert(input1.value)
  }
  changeWeather = () => {
    // 获取原来的状态
    const { isHot } = this.state
    this.setState({
      isHot: !isHot
    })
  }
  saveInput = c => {
    this.input1 = c
    console.log('@', c)
  }
  render() {
    const { isHot } = this.state
    return (
      <div>
        <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
        {/*<input ref={(currentNode) => {this.input1 = currentNode; console.log('@', currentNode)}} type="text" /><br /><br />*/}
        <input ref={this.saveInput} type='text' />
        <button onClick={this.showInfo}>点击提示输入的数据</button>
        <button onClick={this.changeWeather}>点我切换天气</button>
      </div>
    )
  }
}
```

**第三种形式 - createRef**:

```jsx
class Demo extends React.Component {
  /*
    React.createRef 调用后可以返回一个容器,该容器可以存储被 ref 表示的节点
    该容器是"专人专用"的
  */
  myRef = React.createRef()
  myRef2 = React.createRef()

  showInfo = () => {
    console.log(this.myRef)
  }

  showData2 = () => {
    console.log(this.myRef)
  }

  saveInput = c => {
    this.input1 = c
    console.log('@', c)
  }

  render() {
    return (
      <div>
        <input ref={this.myRef} type='text' placeholder='点击按钮提示数据' />
        <button onClick={this.showInfo}>点击提示输入的数据</button>
        <input
          onBlur={this.showData2}
          ref={this.myRef2}
          type='text'
          placeholder='失去焦点提示数据'
        />
      </div>
    )
  }
}
```

<br>

### 2.6 react 中的事件处理

1. 通过 `onXxx` 属性指定事件处理函数
   - React 使用的是不同于原生的 `onxxx` 事件 —— 这是为了更好的兼容性
   - React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —— 这是为了高效
2. 通过 `event.target` 得到发生事件的 DOM 元素对象 —— 不要过度使用 ref

```jsx
// 展示右侧输入框的数据
showData2 = event => {
  alert(event.target.value)
}

// render() {} 里面的
;<input onBlur={this.showData2} type='text' placeholder='失去焦点提示数据' />
```

<br>

### 2.7 非受控组件

> 现用现取

```jsx
class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault() // 阻止表单提交
    const { username, password } = this
    alert(`你输入的用户名是${username.value},你输入的密码是${password.value}`)
  }
  render() {
    return (
      <form action='https://www.baidu.com' onSubmit={this.handleSubmit}>
        用户名:
        <input ref={c => (this.username = c)} type='text' name='username' />
        密码:
        <input ref={c => (this.password = c)} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('test'))
```

<br>

### 2.8 受控组件

> 推荐使用受控组件,相当于 vue 的双向绑定 v-model

```jsx
class Login extends React.Component {
  // 初始化状态
  state = {
    username: '', // 用户名
    password: '' // 密码
  }

  handleSubmit = event => {
    event.preventDefault() // 阻止表单提交
    const { username, password } = this.state
    alert(`${username}, ${password}`)
  }

  // 保存账号到状态中
  saveUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  // 保存密码到状态中
  savePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input onChange={this.saveUsername} type='text' name='username' />
        密码:
        <input onChange={this.savePassword} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('test'))
```

<br>

### 2.9 函数柯里化

> 像 2.8 节中,每个 input 框都有一个 `onChange={saveXxx}`,十分繁琐

**基本介绍**:

```jsx
//#region
/*
    高阶函数:如果一个函数符合下面 2 个规范中的任何一个,那该函数就是高阶函数
      1.若 A 函数,接收的参数是一个函数,那么 A 就可以称之为高阶函数
      2.若 A 函数,调用的返回值依然是一个函数,那么 A 就可以称之为高阶函数
      常见的高阶函数: Promise、setTimeout、map、reduce 等
    函数的柯里化:通过函数调用继续返回函数的方式,实现多次接收参数最后统一处理的函数编码方式
  */
//#endregion
```

**简单示范**:

```jsx
function sum(a: number) {
  return (b: number) => {
    return (c: number) => {
      // 统一处理
      return a + b + c
    }
  }
}

const result = sum(1)(2)(3)
```

**saveFormData 柯里化示范**:

```jsx
class Login extends React.Component {
  // 初始化状态
  state = {
    username: '', // 用户名
    password: '' // 密码
  }

  handleSubmit = event => {
    event.preventDefault() // 阻止表单提交
    const { username, password } = this.state
    alert(`${username}, ${password}`)
  }

  // 保存表单数据到状态中
  saveFormData = dataType => {
    return event => {
      this.setState({
        [dataType]: event.target.value
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input onChange={this.saveFormData('username')} type='text' name='username' />
        密码:
        <input onChange={this.saveFormData('password')} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'))
```

<br>

### 2.10 不用柯里化实现保存 state

```jsx
// 保存表单数据到状态中
saveFormData = (dataType, value) => {
  this.setState({
    [dataType]: value
  })
}

// 这里是 render() {return ()} 里面的
用户名: <input
  onChange={event => this.saveFormData('username', event)}
  type='text'
  name='username'
/>
密码: <input
  onChange={event => this.saveFormData('password', event)}
  type='password'
  name='password'
/>
```

<br>

### 2.11 兄弟间传递值(github 搜索案例)

**5.3 的优化版**:

_App.jsx_:

```jsx
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Search />
        <List />
      </div>
    )
  }
}
```

_Search.jsx_:

```jsx
import axios from 'axios'
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class search extends Component {
  search = () => {
    // 获取用户输入
    const {
      keyWordElement: { value: keyWord }
    } = this
    // 发送请求前通知 List 更新状态
    PubSub.publish('stateChange', { isFirst: false, isLoading: true })
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      // axios.get(`/api/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后通知 app 更新状态
        // this.props.updateAppState({ isLoading: false, users: response.data.items })
        PubSub.publish('stateChange', { isLoading: false, users: response.data.items })
      },
      error => {
        // 请求失败后通知 app 更新状态
        // this.props.updateAppState({ isLoading: false, err: error.message })
        PubSub.publish('stateChange', { isLoading: false, err: error.message })
      }
    )
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>搜索 github 用户</h3>
        <div>
          <input
            ref={c => (this.keyWordElement = c)}
            type='text'
            placeholder='输入关键词点击搜索'
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
```

_List.jsx_:

```jsx
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [], // 初始化状态,users 初始值为数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' //存储请求相关的错误信息
  }

  componentDidMount() {
    this.token = PubSub.subscribe('stateChange', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { isFirst, isLoading, err } = this.state
    return (
      <div className='row'>
        {isFirst ? (
          <h2>欢迎使用,输入关键字,随后点击搜索</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          this.state.users.map(userObj => {
            return (
              <div key={userObj.id} className='card'>
                <a rel='noreferrer' href={userObj.html_url} target='_blank'>
                  <img alt='avatar' src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className='card-text'>{userObj.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
```

<br>

## 3.生命周期

### 3.1 生命周期示例图片

**旧**:

![react生命周期(旧)](<https://cdn.jsdelivr.net/gh//YuanKe3/PHOTO/img/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%97%A7).png>)

**新**:

![react生命周期(新)](<https://cdn.jsdelivr.net/gh//YuanKe3/PHOTO/img/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%96%B0).png>)

<br>

### 3.2 生命周期 - 旧 - 挂载

**挂载执行顺序**:

- `constructor`
- `componentWillMount`
- `render`
- `componentDidMount`
- `componentWillUnmount`

```jsx
class Count extends React.Component {
  constructor(props) {
    // 构造器
    console.log('Count - constructor')
    super(props)
    // 初始化状态
    this.state = { count: 0 }
  }

  add = () => {
    // 获取原状态
    let { count } = this.state
    // 更新状态
    this.setState({ count: (count += 1) })
  }

  // 卸载组件按钮的回调
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('test'))
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('Count - componentWillMount')
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count - componentDidMount')
  }

  // 组件卸载前的钩子
  componentWillUnmount() {
    console.log('Count - componentWillUnmount')
  }

  render() {
    console.log('Count - render')
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为 {count}</h2>
        <button onClick={this.add}>点我 + 1</button>
        <button onClick={this.death}>卸载组件</button>
      </div>
    )
  }
}

ReactDOM.render(<Count />, document.getElementById('test'))
```

<br>

### 3.3 生命周期 - 旧 - 更新

**setState 的线**:

- `shouldComponentUpdate`
- `componentWillUpdate`
- `render`
- `componentDidUpdate`: 三个参数(`prevProps`、`prevState`、`snapshotValue`)

```jsx
// 控制组件更新的阀门
// 类似于阀门的作用,如果返回为 true 就能正常更新 state,否则 state 不能更新
shouldComponentUpdate() {
  console.log('Count - shouldComponentUpdate')
  return true
}

// 组件将要更新的钩子
componentWillUpdate() {
  console.log('Count - componentWillUpdate')
}

// 组件更新完毕的钩子
componentDidUpdate() {
  console.log('Count - componentDidUpdate')
}
```

---

**forceUpdate 的线**:

- `componentWillUpdate`
- `render`
- `componentDidUpdate`

```jsx
class Count extends React.Component {
  constructor(props) {
    // 构造器
    console.log('Count - constructor')
    super(props)
    // 初始化状态
    this.state = { count: 0 }
  }

  add = () => {
    // 获取原状态
    let { count } = this.state
    // 更新状态
    this.setState({ count: (count += 1) })
  }

  // 卸载组件按钮的回调
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('test'))
  }

  // 强制更新按钮的回调
  // 就算阀门关了(shouleComponentUpdate() 返回值为 false)
  force = () => {
    this.forceUpdate()
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('Count - componentWillMount')
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count - componentDidMount')
  }

  // 组件卸载前的钩子
  componentWillUnmount() {
    console.log('Count - componentWillUnmount')
  }

  // 控制组件更新的阀门
  // 类似于阀门的作用,如果返回为 true 就能正常更新 state,否则 state 不能更新
  shouldComponentUpdate() {
    console.log('Count - shouldComponentUpdate')
    return false
  }

  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log('Count - componentWillUpdate')
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log('Count - componentDidUpdate')
  }

  render() {
    console.log('Count - render')
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为 {count}</h2>
        <button onClick={this.add}>点我 + 1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>不更改任何状态中的数据,强制更新一下</button>
      </div>
    )
  }
}

ReactDOM.render(<Count />, document.getElementById('test'))
```

---

**父组件 render 的线**:

- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `render`
- `componentDidUpdate`

```jsx
class A extends React.Component {
  state = { carName: '奔驰' }
  changeCar = () => {
    this.setState({ carName: '奥拓' })
  }
  render() {
    return (
      <div>
        <div>我是 A 组件</div>
        <button onClick={this.changeCar}>换车</button>
        <B carName={this.state.carName} />
      </div>
    )
  }
}

class B extends React.Component {
  // 组件将要接收新的 props 钩子
  componentWillReceiveProps(props) {
    console.log('B - componentWillReceiveProps', props)
  }
  shouldComponentUpdate() {
    console.log('B - shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('B - componentWillUpdate')
  }
  render() {
    return <div>我是 B 组件,接收到的车是: {this.props.carName}</div>
  }
  componentDidUpdate() {
    console.log('B - componentDidUpdate')
  }
}

ReactDOM.render(<A />, document.getElementById('test'))
```

<br>

### 3.4 生命周期 - 旧 - 总结

1. 初始化阶段: 由 `ReactDOM.render()` 触发 --- 初次渲染
   1. `constructor()`
   2. `componentWillMount()`
   3. `render()`
   4. `componentDidMount()`: **常用**,一般在这个钩子中做一些初始化的事,例如: 开启定时器、发送网络请求、订阅消息
2. 更新阶段: 由组件内部 `this.setState` 或父组件 `render` 触发
   1. `shouldComponentUpdate()`
   2. `componentWillUpdate()`
   3. `render()`: **必须**
   4. `componentDidUpdate()`
3. 卸载组件: 由 `ReactDOM.unmountComponentAtNode()` 触发
   1. `componentWillUnmount`: **常用**,一般在这个钩子中做一些首尾的事,例如: 关闭定时器,取消订阅消息

<br>

### 3.5 生命周期 - 新

> 丢弃了 `componentWillMount`、`componentWillUpdate`、`componentWillUnmount` 这三个生命周期, 引入了 `getDerivedStateFromProps`、`getSnapshotBeforeUpdate` 这两个生命周期

**若 state 的值在任何时候都取决于 props, 那么可以使用**:

```javascript
// 必须返回 state Obj / null
static getDerivedStateFromProps(props, state) {
  console.log('getDerivedStateFromProps', props, state)
  return props
}
```

**实例**:不断获取后台的新闻,但是列表仍然保持在当前位置,不会因为更新而变化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello react</title>

    <style>
      .list {
        width: 200px;
        height: 150px;
        background-color: skyblue;
        overflow: auto;
      }

      .news {
        height: 30px;
      }
    </style>
  </head>

  <body>
    <div id="test"></div>

    <!-- 引入 react 核心库 -->
    <script src="./17.0.1/react.development.js"></script>
    <!-- 引入 react-dom,用于支持 react 操作 DOM -->
    <script src="./17.0.1/react-dom.development.js"></script>
    <!-- 引入 babel,用于将 jsx 转为 js -->
    <script src="./17.0.1/babel.min.js"></script>
    <!-- 引入 prop-types,用于对组件标签属性进行限制 -->
    <script src="./17.0.1/prop-types.js"></script>

    <script type="text/babel">
      class NewsList extends React.Component {
        state = {
          newsArr: []
        }

        componentDidMount() {
          setInterval(() => {
            const { newsArr } = this.state
            // 模拟一条新闻
            const news = '新闻' + (newsArr.length + 1)
            // 更新状态
            this.setState({
              newsArr: [news, ...newsArr]
            })
          }, 1000)
        }

        getSnapshotBeforeUpdate() {
          // 为 list 元素的滚动高度拍一个快照
          return this.refs.list.scrollHeight
        }

        componentDidUpdate(preProps, preState, height) {
          this.refs.list.scrollTop += this.refs.list.scrollHeight - height
        }

        render() {
          return (
            <div className='list' ref='list'>
              {this.state.newsArr.map((n, index) => {
                return (
                  <div key={index} className='news'>
                    {n}
                  </div>
                )
              })}
            </div>
          )
        }
      }
      ReactDOM.render(<NewsList />, document.getElementById('test'))
    </script>
  </body>
</html>
```

<br>

### 3.6 DOM 的 diffing 算法

**key 有什么作用?**

1. 简单说,key 是虚拟 DOM 对象的表示,在更新显示时 key 起着及其重要的作用
2. 详细说,当状态中的数据发生变化时,react 会根据新数据生成新的虚拟 DOM,随后 React 进行新虚拟 DOM 和旧虚拟 DOM 的 diff 比较: 规则如下:
   1. 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key:
      - 若虚拟 DOM 中内容没变,直接使用之前的真实 DOM
      - 若虚拟 DOM 中内容变了,则生成新的真实 DOM,随后替换掉页面中之前的真实 DOM
   2. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key
      - 根据数据创建新的真实 DOM,然后渲染到页面

**用 index 做 key 的问题**:

1. 若对数据进行逆序添加、逆序删除等破坏顺序的操作,会产生没有必要的真实 DOM 更小,效率低
2. 如果结构中还包括输入类的 DOM,会产生错误 DOM 更新

<br>

## 4.脚手架

### 4.1 一些基本文件

_public/index.html_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 用于开启理想视口 用于做移动端的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签 + 地址栏的颜色(仅支持安卓手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <!-- 用于指定网页添加到手机主屏幕上的图标(仅支持苹果手机) -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持 js,则展示标签中的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

_App.js_:

```js
import React, { Component } from 'react'
// import { Component } from 'React'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建并暴露外壳组件 App
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
```

_index.js_:

```javascript
// 引入 react 核心库
import React from 'react'
// 引入 ReactDOM
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

<br>

### 4.2 一些插件提供的代码片段

- `rcc`: react class component 生成类式组件
- `rfc`: react function component 生成函数式组件

<br>

## 5.axios

### 5.1 跨域

**方法一**:

> 客户端端口 3000,服务端端口 5000.请求 3000 没有的,再去 5000 里找.极为不推荐!!!

_package.json_:

```json
"proxy": "http://localhost:5000"
```

_App.jsx_：

```jsx
axios.get('http://localhost:3000/students')
```

**方法二**:

> 客户端端口 3000, 服务端端口 5000、5001

_App.jsx_:

```jsx
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  getStudentData = () => {
    // 3000 是客户端的地址而不是服务端的地址!
    axios.get('http://localhost:3000/api1/students').then(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }
  getCarData = () => {
    // 因为客户端本身就是 3000 端口,所以可以简写为 /api2/cars
    axios.get('http://localhost:3000/api2/cars').then(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }
}
```

_src/setupProxy.js_:

```javascript
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      // target 是服务器地址
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中 Host 的值
      pathRewrite: { '^/api1': '' } // 重写请求路径(必须)
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}
```

<br>

### 5.2 连续解构赋值知识补充

> 利用解构赋值的连续写法,其中 a、b 都没有被申明

```javascript
const obj = { a: { b: { c: 1 } } }
const {
  a: {
    b: { c }
  }
} = obj
console.log(c) // 1

// 解构赋值 + 重命名
const {
  a: {
    b: { c: anotherName }
  }
} = obj
console.log(anotherName) // 1
```

<br>

### 5.3 案例: 调用 github 的搜索 api

_App.jsx_:

```jsx
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [], // 初始化状态,users 初始值为数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' //存储请求相关的错误信息
  }

  // 更新 app 的 state
  updateAppState = stateObj => {
    this.setState(stateObj)
  }

  render() {
    const { users } = this.state
    return (
      <div className='container'>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
```

_Search.jsx_:

```jsx
import axios from 'axios'
import React, { Component } from 'react'

export default class search extends Component {
  search = () => {
    // 获取用户输入
    const {
      keyWordElement: { value: keyWord }
    } = this
    // 发送请求前通知 app 更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      // axios.get(`/api/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后通知 app 更新状态
        this.props.updateAppState({ isLoading: false, users: response.data.items })
      },
      error => {
        // 请求失败后通知 app 更新状态
        this.props.updateAppState({ isLoading: false, err: error.message })
      }
    )
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>搜索 github 用户</h3>
        <div>
          <input
            ref={c => (this.keyWordElement = c)}
            type='text'
            placeholder='输入关键词点击搜索'
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
```

_List.jsx_:

```jsx
import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className='row'>
        {isFirst ? (
          <h2>欢迎使用,输入关键字,随后点击搜索</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          this.props.users.map(userObj => {
            return (
              <div key={userObj.id} className='card'>
                <a rel='noreferrer' href={userObj.html_url} target='_blank'>
                  <img alt='avatar' src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className='card-text'>{userObj.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
```

<br>

### 5.4 fetch

**方式一**:

```javascript
fetch(`/api/search/users?q=${keyWord}`)
  .then(
    response => {
      console.log('联系服务器成功了')
      return response.json()
    }
    // // 只有网络不行才会走这,写错请求地址也是走上面的 '联系服务器成功率' 的
    // error => {
    //   console.log('联系服务器失败了', error)
    //   // 由于会返回 undefined 这个非 promise 值,所以仍会执行下面的 .then 的 error 回调
    //   // 所以下一行代码需要中断 promise
    //   return new Promise(() => {})
    // }
  )
  .then(
    response => {
      console.log('获取数据成功了', response)
    }
    // error => {
    //   console.log('获取数据失败了', error)
    // }
  )
  // 上面两个 error 都可以不写,通过这里进行统一的错误管理
  .catch(error => {
    console.log(error)
  })
```

**优化版本**:

```javascript
try {
  const response = await fetch(`/api/search/users?q=${keyWord}`)
  const data = await response.json()
  PubSub.publish('stateChange', { isLoading: false, users: data.items })
} catch (error) {
  PubSub.publish('stateChange', { isLoading: false, err: error.message })
}
```

<br>

## 6.路由

### 6.1 Link、Route

> 安装: `npm i react-router-dom@5`

**路由的基本使用**:

1. 明确好界面的导航区、展示区
2. 导航区的 `a` 标签改为 `Link` 标签: `<Link to="/xxx">Demo</Link>`
3. 展示区写 `Route` 标签进行路径的匹配: `<Route path='/xxx' component={Demo} />`
4. `<App>` 的最外层包裹了一个 `<BrowserRouter` 或 `<HashRouter>`

**路由组件与一般组件区别**:

1. 写法不同:

   - 一般组件: `<Demo />`
   - 路由组件: `<Route path='/xxx' component={Demo} />`

2. 存放位置不同:

   - 一般组件: _components_
   - 路由组件: _pages_

3. 接收到的 `props` 不同:

   - 一般组件: 写组件标签时传递了什么,就能收到什么
   - 路由组建: 接收到三个固定属性:

4. **history**:

5. 1. **go**: _ƒ go(n)_
   2. **goBack**: _ƒ goBack()_
   3. **goForward**: _ƒ goForward()_
   4. **push**: _ƒ push(path, state)_
   5. **replace**: _ƒ replace(path, state)_

6. **location**:

7. 1. **pathname**: "/about"
   2. **search**: ""
   3. **state**: undefined

8. **match**:

9. 1. **params**: {}
   2. **path**: "/about"
   3. **url**: "/about"

10. ***

_App.jsx_:

```jsx
{/* 原生 html 中,靠 a 跳转不同的页面 */}
{/* <a className='list-group-item' href='./about.html'>
  About
</a>
<a className='list-group-item active' href='./home.html'>
  Home
</a> */}

{/* 在 React 中靠路由链接实现切换组件 -- 编写路由链接 */}
<Link className='list-group-item' to='/about'>
  About
</Link>
<Link className='list-group-item' to='/home'>
  Home
</Link>
```

_index.js_:

```javascript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

<br>

### 6.2 NavLink

> NavLink 会自动在选中时给路由组建添加 `active` 的类名.类名可以通过 `activeClassName` 进行修改

```jsx
<NavLink activeClassName='yuanke' className='list-group-item' to='/about'>
  About
</NavLink>
<NavLink activeClassName='yuanke' className='list-group-item' to='/home'>
  Home
</NavLink>
```

<br>

### 6.3 插槽功能的实现(封装 MyNavLink)

> 父组件中,标签中间的内容其实也是一个特殊的属性,在 React 中可以使用自闭和标签,而标签内容用 `children` 来制定就行了.所以子组件可以直接用 `{...this.props}` 来接收父组件的包括标签内容的所有属性.

_父组件_:

```jsx
<MyNavLink to='/about'>About</MyNavLink>
<MyNavLink to='/home'>Home</MyNavLink>
```

_子组件_:

```jsx
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return <NavLink activeClassName='yuanke' className='list-group-item' {...this.props} />
  }
}
```

<br>

### 6.4 Switch

> 当注册路由有多个时,且 `Route` 里面的 `path` 有多个路由命中时,会导致匹配上多个路由.若想只匹配第一个路由,就使用 `Switch` 组件

```jsx
<Switch>
  <Route path='/about' component={About} />
  <Route path='/home' component={Home} />
  <Route path='/home' component={Test} />
</Switch>
```

<br>

### 6.5 history 的资源丢失问题

> 当路由为多级路径时,例如 `<Route path='/yuanke/home' component={Home} />` 时,如果刷新页面,则会找不到 _public/css/bootstrap.css_ 导致直返一个 _index.html_,表现为丢失所有样式.原因,刷新时请求的 _http://localhost:3000/yuanke/css/bootstrap_ 中的 _yuanke_ 会被认为是一个资源路径,找不到该资源自然如此.

**解决办法**:

- 方法一: _public_ 中的 _index.html_ 中,将 `link` 里的 _bootstrap_ 资源的相对路径改成绝对路径
- 方法二: 同上,不过将绝对路径改成 `%PUBLIC_URL%`
- 方法三: 同上, 仍然使用相对路径, 但是使用哈西路由

<br>

### 6.6 严格匹配 / 模糊匹配

> 默认是模糊匹配.严格匹配不要随便开启,因为有些时候开启会导致无法继续匹配二级路由

```jsx
<MyNavLink to='/home/a/b'>Home</MyNavLink>

// 如果不开启 exact,则仍能跳转到 /home/a/b 且会显示对应页面
<Route exact path='/home' component={Home} />
```

<br>

### 6.7 Redirect

```jsx
<Switch>
  <Route path='/about' component={About} />
  <Route exact path='/home' component={Home} />
  // 如果都没匹配上,就自动跳转到 about(可以实现刚进入首页默认跳转到 about 页面)
  <Redirect to='/about' />
</Switch>
```

<br>

### 6.8 嵌套路由

> 点击 `News` 匹配到 `/home/news` 上去, 此时匹配 `/home` 和 `/home/news` 两个路由, 则渲染这两个路由组件

_App.jsx_:

```jsx
<MyNavLink to='/about'>About</MyNavLink>
<MyNavLink to='/home'>Home</MyNavLink>

{/* 注册路由, 内容渲染到这里 */}
<Switch>
  <Route path='/about' component={About} />
  <Route path='/home' component={Home} />
  <Redirect to='/about' />
</Switch>
```

_index.jsx_:

```jsx
;<ul className='nav nav-tabs'>
  <li>
    <MyNavLink to='/home/news'>News</MyNavLink>
  </li>
  <li>
    <MyNavLink to='/home/message'>Message</MyNavLink>
  </li>
</ul>

{
  /* 注册路由, 内容渲染到这里 */
}
;<Switch>
  <Route path='/home/news' component={News} />
  <Route path='/home/message' component={Message} />
</Switch>
```

<br>

### 6.9 向路由组件传递 params 参数

> 三种方式:
>
> - params 参数方式
> - search 参数方式
> - state 参数方式

**方式一 - params 参数**:

> 传与接都是用 `/:xx/:yy` 的形式

_父组件_:

```jsx
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(msgObj => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递 params 参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
              </li>
            )
          })}
        </ul>

        {/* 注册路由 */}
        <hr />
        {/* 声明接收 params 参数 */}
        <Route path='/home/message/detail/:id/:title' component={Detail} />
      </div>
    )
  }
}
```

_子组件_:

```jsx
import React, { Component } from 'react'

const data = [
  { id: '01', content: '你好中国' },
  { id: '02', content: '你好中华' },
  { id: '03', content: '你好华夏' }
]
export default class Detail extends Component {
  render() {
    // 接收 params 参数
    const { id, title } = this.props.match.params
    const findRes = data.find(obj => obj.id === id)
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findRes.content}</li>
      </ul>
    )
  }
}
```

**方法二 - 使用 search 参数**:

> 获取到的 search 是 urlencode 编码 zifuchuan,需要借助 qs 进行解析

_父组件_:

```jsx
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(msgObj => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由组件传递 search 参数 */}
                <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>
                  {msgObj.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <hr />
        {/* 声明接收 params 参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

        {/* search 参数无需声明接收 */}
        <Route path='/home/message/detail' component={Detail} />
      </div>
    )
  }
}
```

_子组件_:

```jsx
import React, { Component } from 'react'
import qs from 'qs'

const data = [
  { id: '01', content: '你好中国' },
  { id: '02', content: '你好中华' },
  { id: '03', content: '你好华夏' }
]
export default class Detail extends Component {
  render() {
    // 接收 params 参数
    // const { id, title } = this.props.match.params

    // 接收 search 参数
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))

    const findRes = data.find(obj => obj.id === id)
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findRes.content}</li>
      </ul>
    )
  }
}
```

**方法二 - 使用 state 参数**:

> 这样地址栏不会像前两种那样会有参数.

_父组件_:

```jsx
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(msgObj => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由组件传递 search 参数 */}
                {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}

                {/* 向路由组件传递 state 参数 */}
                <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: msgObj.id, title: msgObj.title }
                  }}
                >
                  {msgObj.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <hr />
        {/* 声明接收 params 参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

        {/* search 参数无需声明接收 */}
        {/* <Route path='/home/message/detail' component={Detail} /> */}

        {/* state 参数无需声明接收 */}
        <Route path='/home/message/detail' component={Detail} />
      </div>
    )
  }
}
```

_子组件_:

```jsx
import React, { Component } from 'react'
// import qs from 'qs'

const data = [
  { id: '01', content: '你好中国' },
  { id: '02', content: '你好中华' },
  { id: '03', content: '你好华夏' }
]
export default class Detail extends Component {
  render() {
    // 接收 params 参数
    // const { id, title } = this.props.match.params

    // 接收 search 参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    // 接收 state 参数
    const { id, title } = this.props.location.state || {}

    const findRes = data.find(obj => obj.id === id) || {}

    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findRes.content}</li>
      </ul>
    )
  }
}
```

<br>

### 6.10 push 与 replace

> 默认就是 push 模式,前进后退是栈的结构

下为开启 replace 模式的路由.如果所有路由都开启了 replace 模式,就没有任何的历史记录了

```jsx
<Link
  replace
  to={{
    pathname: '/home/message/detail',
    state: { id: msgObj.id, title: msgObj.title }
  }}
>
  {msgObj.title}
</Link>
```

<br>

### 6.11 编程式路由导航

_父组件_:

```jsx
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }

  replaceShow = (id, title) => {
    // replace 跳转 + 携带 params 参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace 跳转 + 携带 search 参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    // replace 跳转 + 携带 state 参数
    this.props.history.replace(`/home/message/detail`, {
      id,
      title
    })
  }

  pushShow = (id, title) => {
    // push 跳转 + 携带 params 参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push 跳转 + 携带 search 参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    // push 跳转 + 携带 state 参数
    this.props.history.push(`/home/message/detail`, {
      id,
      title
    })
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(msgObj => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                {/* &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push 查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>
                  replace 查看
                </button> */}
                {/* 向路由组件传递 search 参数 */}
                {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push 查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>
                  replace 查看
                </button> */}
                {/* 向路由组件传递 state 参数 */}
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push 查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>
                  replace 查看
                </button>
                {/* <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: msgObj.id, title: msgObj.title }
                  }}
                >
                  {msgObj.title}
                </Link> */}
              </li>
            )
          })}
        </ul>

        <hr />
        {/* 声明接收 params 参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

        {/* search 参数无需声明接收 */}
        {/* <Route path='/home/message/detail' component={Detail} /> */}

        {/* state 参数无需声明接收 */}
        <Route path='/home/message/detail' component={Detail} />
      </div>
    )
  }
}
```

_子组件_:

```jsx
import React, { Component } from 'react'
// import qs from 'qs'

const data = [
  { id: '01', content: '你好中国' },
  { id: '02', content: '你好中华' },
  { id: '03', content: '你好华夏' }
]
export default class Detail extends Component {
  render() {
    // 接收 params 参数
    // const { id, title } = this.props.match.params

    // 接收 search 参数
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    // 接收 state 参数
    const { id, title } = this.props.location.state || {}

    const findRes = data.find(obj => obj.id === id) || {}

    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findRes.content}</li>
      </ul>
    )
  }
}
```

<br>

### 6.12 withRouter 的使用

> 一般组件无法使用路由组件的特有 api.`withRouter` 可以将一般组件变成路由组件.`withRouter` 的返回值是一个新组件.

```jsx
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  render() {
    console.log('Header 组件收到的 props 是', this.props)
    return (
      <div>
        <div>index</div>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}

export default withRouter(Header)
```

<br>

## 7.Antd

### 7.1 按需引入

1. 安装: ` npm i @craco/craco --legacy-peer-deps`、`npm i babel-plugin-import`
2. 根目录配置 _craco.config.js_:

```javascript
// 配置具体的修改功能
module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        }
      ]
    ]
  }
}
```

3. 无需在 _App.js_ 中引入样式了:

_App.js_:

```javascript
import React, { Component } from 'react'
import { Button } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Button type='primary'>点我</Button>
      </div>
    )
  }
}
```

<br>

### 7.2 自定义主题

1. 安装: `npm i craco-less --legacy-peer-deps`
2. 配置:

_craco.config.js_:

```javascript
const CracoLessPlugin = require('craco-less')

// 配置具体的修改功能
module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'orange' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
```

<br>

## 8.redux

### 8.1 三个核心概念

1. `action`:
   - 动作的对象
   - 包含两个属性:
     - `type`: 标识属性,值为字符串,唯一,必要属性
     - `data`: 数据属性,值类型任意,可选属性
   - 例子: `{ type: 'ADD_STUDENT' }, data: { name: 'tom', age: 18 }`
2. `reducer`:
   - 用于初始化状态、加工状态
   - 加工时,根据旧的 `state` 和 `action`,产生新的 `state` 的纯函数
3. `store`:
   - 将 `state`、`action`、`reducer` 联系在一起的对象
   - 如何得到此对象?
     1. `import {creteStore} from 'redux'`
     2. `import reducer from './reducers'`
     3. `const store = createStore(reducer)`
   - 此对象的功能?
     1. `getState`: 得到 `state`
     2. `dispatch(action)`: 分发 `patch`,触发 `reducer` 调用,产生新的 `state`
     3. `subscribe(listener)`: 注册监听,当产生了新的 `state` 时,自动调用

<br>

### 8.2 求和案例 - 纯 react 版

```jsx
import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count + value * 1 })
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - value * 1 })
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 })
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
```

<br>

### 8.3 基本使用

1. 安装: `npm i redux`
2. 创建 _store.js_:

```javascript
/**
 * 改文件专门用于暴露一个 store 对象,整个应用只有一个 store 对象
 */

import { legacy_createStore as createStore } from 'redux'
import countReducer from './countReducer'

// 暴露代码
export default createStore(countReducer)
```

3. 创建 _countReducer.js_ :

```javascript
/**
 * 1.改文件是用于创建一个为 Count 组件服务的 reducer,reducer 的本质就是一个函数
 * 2.reducer 函数会接收到两个参数,分别为: 之前的状态(preState)、动作对象(action)
 */

export default function countReducer(preState = 0, action) {
  console.log(preState, action)
  // 从 action 对象中获取: type、data
  const { type, data } = action
  // 根据 type 决定如何加工数据
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      // 初始化状态
      return preState
  }
}
```

4. 由于 redux 只管理状态,不会触发响应式,故在 _index.js_ 中写入:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
```

5. _count_action.js_:

```javascript
/**
 * 改文件专门为 Count 组件生成 action 对象
 */
import { INCREMENT, DEREMENT } from './constant'

export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})

export const createDecrementAction = data => ({
  type: DEREMENT,
  data
})
```

6. _Count/index.jsx_:

```jsx
import React, { Component } from 'react'
import store from '../../redux/store'
// 引入 actionCreator,专门用于创建 action 对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {
  // componentDidMount() {
  //   // 检测 redux 中状态的变化.只要有变化,就调用 render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  // 加法
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createDecrementAction(value * 1))
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createDecrementAction(value * 1))
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
```

<br>

### 8.4 异步 action

> 安装: `npm i redux-thunk`

_store.js_:

```javascript
/**
 * 改文件专门用于暴露一个 store 对象,整个应用只有一个 store 对象
 */

import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import countReducer from './countReducer'
// 引入 redux-thunk, 用于支持异步 action
import thunk from 'redux-thunk'

// 暴露代码
export default createStore(countReducer, applyMiddleware(thunk))
```

_Count/index.jsx_:

```jsx
// 异步加
incrementAsync = () => {
  const { value } = this.selectNumber
  // setTimeout(() => {
  store.dispatch(createDecrementAsyncAction(value * 1, 500))
  // }, 500)
}
```

_count_action.js_:

```javascript
/**
 * 改文件专门为 Count 组件生成 action 对象
 */
import { INCREMENT, DEREMENT } from './constant'
// import store from './store'

// 同步 action,就是指 action 的值为 Object 类型的一般对象
export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})
export const createDecrementAction = data => ({
  type: DEREMENT,
  data
})

// 异步 action,就是指 action 的值为函数,异步 action 中一般都会调用同步 action
export const createDecrementAsyncAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data))
      dispatch(createIncrementAction(data))
    }, time)
  }
}
```

<br>

## 9.react-redux

### 9.1 基本使用

1. 创建组件容器 _containers/Count/index.js_:(对应 _components/Count/index.js_ 这个 UI 组件)

```javascript
// 引入 Count 的 UI 组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
// 引入 action
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementAsyncAction
} from '../../redux/count_action'

/*
  1.mapStateToProps 函数的返回是一个对象
  2.返回的对象中的 key 作为传递给 UI 组件 props 的 key,value 就作为传递给 UI 组件 props 的 value
  3.mapStateToProps 用于传递状态
*/
function mapStateToProps(state) {
  return {
    count: state
  }
}

/*
  1.mapDispatchToProps 函数的返回是一个对象
  2.返回的对象中的 key 作为传递给 UI 组件 props 的 key,value 就作为传递给 UI 组件 props 的 value
  3.mapDispatchToProps 用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createDecrementAsyncAction(number, time))
  }
}

// 使用 connect()() 创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)



// ------------------------------------------
// 这里是简化版 ↓


// 引入 Count 的 UI 组件
import CountUI from '../../components/Count'
// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
// 引入 action
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementAsyncAction
} from '../../redux/count_action'

// 使用 connect()() 创建并暴露一个 Count 的容器组件
export default connect(
  state => ({ count: state }),
  // mapDispatchToProps 的一般写法(手动挡)
  // dispatch => ({
  //   jia: number => dispatch(createIncrementAction(number)),
  //   jian: number => dispatch(createDecrementAction(number)),
  //   jiaAsync: (number, time) => dispatch(createDecrementAsyncAction(number, time))
  // })

  // mapDispatchToProps 的简写(自动挡)
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createDecrementAsyncAction
  }
)(CountUI)
```

2. _App.js_ 中引入组件容器而不是 UI 组件, 并传入 store. 组件容器写法如上:

```javascript
import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store */}
        <Count />
      </div>
    )
  }
}
```

3. UI 组件的写法 - _components/Count/index.jsx_:

```jsx
import React, { Component } from 'react'

export default class Count extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
```

4. 定义 action 对象中的 type 类型的常量 _redux/constant.js_:

```javascript
/**
 * 该模块是用于定义 action 对象中 type 类型的常量值
 */

export const INCREMENT = 'increment'
export const DEREMENT = 'decrement'
```

5. action creater 的封装 _redux/count_action.js_:

```javascript
/**
 * 改文件专门为 Count 组件生成 action 对象
 */
import { INCREMENT, DEREMENT } from './constant'
// import store from './store'

// 同步 action,就是指 action 的值为 Object 类型的一般对象
export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})
export const createDecrementAction = data => ({
  type: DEREMENT,
  data
})

// 异步 action,就是指 action 的值为函数,异步 action 中一般都会调用同步 action
export const createDecrementAsyncAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data))
      dispatch(createIncrementAction(data))
    }, time)
  }
}
```

6. _redux/countReducer_:

```javascript
/**
 * 1.改文件是用于创建一个为 Count 组件服务的 reducer,reducer 的本质就是一个函数
 * 2.reducer 函数会接收到两个参数,分别为: 之前的状态(preState)、动作对象(action)
 */
import { INCREMENT, DEREMENT } from './constant'

export default function countReducer(preState = 0, action) {
  // 从 action 对象中获取: type、data
  const { type, data } = action
  // 根据 type 决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data
    case DEREMENT:
      return preState - data
    default:
      // 初始化状态
      return preState
  }
}
```

7. _index.js_:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
// import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// 检测 redux 中状态的改变,如 redux 状态发生了改变,那么重新渲染 app
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
// })
```

<br>

### 9.2 整合 UI 组件和容器

_container/Count/index.jsx_:

```jsx
import React, { Component } from 'react'
// 引入 connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
// 引入 action
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementAsyncAction
} from '../../redux/count_action'

// 定义 UI 组件
class Count extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
        <select ref={c => (this.selectNumber = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

// 使用 connect()() 创建并暴露一个 Count 的容器组件
export default connect(state => ({ count: state }), {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createDecrementAsyncAction
})(Count)
```

<br>

### 9.3 优化总结

1. 容器组件和 UI 组件整合成一个文件

2. 无需自己给容器组件传递 store,给 `<App />` 包裹一个 `<Provider store={store}>` 即可

3. 使用了 `react-redux` 不用自己监测 redux 中状态的改变了,容器组件可以自动完成这个工作

4. `mapDispatchToProps` 也可以简单写成一个对象

5. 一个组件要和 redux 打交道要经过几步:

   1. 定义好 UI 组件 --- 不暴露
   2. 引入 connect 生成一个容器组件并暴露,写法如下:

   ```javascript
   connect(
   	state => ({ key: value }),
     { key: xxxAction }
   )(UI 组件)
   ```

   3. 在 UI 组件中通过 `this.props.xxx` 读取和操作状态

<br>

### 9.4 纯函数

1. 一类特别的函数: 只要是同样的输入(实参),必定得到同样的输出
2. 必须有以下的约束:
   - 不得改写参数数据
   - 不会产生任何副作用,例如网络请求、输入和输出设备
   - 不能调用 `Date.now()` 或者 `Math.random()` 等不纯的方法
3. redux 的 reducer 函数必须是一个纯函数,例如:

```javascript
import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      // 此处不能如下面注释这样写,因为这样写会导致 preState 被改写了,personReductor 就不是纯函数了
      // preState.unshift(data)
      return [data, ...preState]
    default:
      return preState
  }
}
```

<br>

### 9.5 开发者工具

1. 安装: `redux-devtools-extension`
2. _store.js_:

```javascript
/**
 * 改文件专门用于暴露一个 store 对象,整个应用只有一个 store 对象
 */

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为 Count 组件服务的 reducer
import countReducer from './reducers/count'
import PersonRuducer from './reducers/person'
// 引入 redux-thunk, 用于支持异步 action
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// 汇总所有的 reducer 变成一个总的 reducer
const allRuducer = combineReducers({
  he: countReducer,
  rens: PersonRuducer
})

// 暴露代码
export default createStore(allRuducer, composeWithDevTools(applyMiddleware(thunk)))
```

<br>

### 9.6 上线打包

> 最简单方法: [Express 部署 Vue 项目 - 掘金 (juejin.cn)](https://juejin.cn/post/7071076649814458398)

1. 安装 `npm i serve -g`
2. `serve build`

<br>

## 10.拓展

### 10.1 setState 的两种写法

```jsx
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }

  add = () => {
    // 对象式的 setState
    // const { count } = this.state
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state.count)
    // })

    // 函数式的 setState
    this.setState(
      (state, props) => {
        console.log(state, props)
        return {
          count: state.count + 1
        }
      },
      () => {
        console.log(this.state.count)
      }
    )
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <button onClick={this.add}>点我 + 1</button>
      </div>
    )
  }
}
```

<br>

### 10.2 lazyLoad

> 懒加载必须配合 `Suspense` 来使用

```jsx
import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
// Loading 组件不能用懒加载
import Loading from '../Loading'

// import Home from './Home'
// import About from './About'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <NavLink className='list-group-item' to='/about'>
                About
              </NavLink>
              <NavLink className='list-group-item' to='/home'>
                Home
              </NavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Suspense fallback={Loading}>
                  {/* 注册路由 */}
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
```

<br>

### 10.3 hooks

```jsx
import React, { Component } from 'react'

// class Demo extends Component {
//   state = {
//     count: 0
//   }

//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为 {this.state.count}</h2>
//         <button onClick={this.add}>点我 + 1</button>
//       </div>
//     )
//   }
// }

function Demo() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('tom')

  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  function changeName() {
    setName('jack')
  }

  return (
    <div>
      <h2>当前求和为 {count}</h2>
      <h2>我的名字是 {name}</h2>
      <button onClick={add}>点我 + 1</button>
      <button onClick={changeName}>点我改名</button>
    </div>
  )
}

export default Demo
```

<br>

### 10.4 useEffect

> 可以在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)

**用法**:

> useEffect Hook 可以看做 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 三个函数的组合

```jsx
useEffect(() => {
  // 在这里可以执行任何带副作用的操作
  return () => {
    // 在组件卸载前执行
  }
})
```

**例子**:

```jsx
function Demo() {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    // 这里相当于 unmount 的钩子
    return () => {
      clearInterval(timer)
    }
    // 这里表示不检测任何数据,则相当于只模拟了 mount 而放弃了 update 的钩子
  }, [])

  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  function unmount() {
    root.unmount()
  }

  return (
    <div>
      <h2>当前求和为 {count}</h2>
      <button onClick={add}>点我 + 1</button>
      <button onClick={unmount}>卸载组件</button>
    </div>
  )
}
```

<br>

### 10.5 useRef

```jsx
const myRef = React.useRef()

function show() {
  alert(myRef.current.value)
}

<input type='text' ref={myRef} />
<button onClick={show}>点我提示数据</button>
```

<br>

### 10.6 Fragment 和空标签

> Fragment 只允许写 key 值的,而空标签啥属性也不能添加(若需要遍历则要 Fragment), 类似于 vue 的 template

<br>

### 10.7 Context(类似于 provide、inject)

**类组件**:

```jsx
import React, { Component } from 'react'
import './index.css'

// 创建 Context 对象
const MyContext = React.createContext()
const { Provider } = MyContext

export default class A extends Component {
  state = { username: 'tom', age: 18 }
  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h3>我是 A 组件</h3>
        <h4>我的用户名是 {username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是 B 组件</h3>
        <C />
      </div>
    )
  }
}

class C extends Component {
  // 必须声明接收 context
  static contextType = MyContext
  render() {
    const { username, age } = this.context
    return (
      <div className='grand'>
        <h3>我是 C 组件</h3>
        <h4>
          我从 A 组件接收到的用户名是 {username} --- {age}
        </h4>
      </div>
    )
  }
}
```

**函数组件**:

```jsx
import React, { Component } from 'react'
import './index.css'

// 创建 Context 对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
  state = { username: 'tom', age: 18 }
  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h3>我是 A 组件</h3>
        <h4>我的用户名是 {username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是 B 组件</h3>
        <C />
      </div>
    )
  }
}

function C() {
  return (
    <div className='grand'>
      <h3>我是 C 组件</h3>
      <h4>
        我从 A 组件接收到的用户名:
        <Consumer>
          {value => {
            return `${value.username}, 年龄是 ${value.age}`
          }}
        </Consumer>
      </h4>
    </div>
  )
}
```

<br>

### 10.8 组件优化

> 1. 只要执行 `setState`,即使不改变状态数据,组件也会重新 `render()`
> 2. 只要当前组件重新 `render()`,就会自动重新 `render` 子组件, 纵使子组件没有用到父组件任何数据 ---> 效率低
>
> 原因: Component 中的 `shouldComponentUpdate()` 总是返回 true

**解决办法**:

1. 重写 `shouldComponentUpdate()` 方法, 比较 `state` 和 `props` 的数据, 如果有变化才返回 true,否则返回 false

```jsx
import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  state = {
    carName: '奔驰c36'
  }

  changeCar = () => {
    this.setState({ carName: '比亚迪' })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.carName === nextState.carName)
  }

  render() {
    console.log('Parent --- render')
    const { carName } = this.state
    return (
      <div className='parent'>
        <h3>我是 Parent 组件</h3>
        <span>我的车名字是: {carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName='奥拓' />
      </div>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, this.props)
    console.log(nextState, nextProps)
    return !(this.props.carName === nextProps.carName)
  }

  render() {
    console.log('Child --- render')
    return (
      <div className='child'>
        <h3>我是 Child 组件</h3>
        <span>我接到的车是 {this.props.carName}</span>
      </div>
    )
  }
}
```

2. 使用 `PureComponent` 重写 `shouldComponentUpdate)()`, 只有 `state` 或 `props` 数据有变化才返回 true

> 注意: 只是进行了 state 和 props 数据的浅比较，如果知识数据对象内部数据变量，返回 false。不要直接修改 state 数据，而是要产生新数据

```jsx
import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = {
    carName: '奔驰c36',
    stus: ['小张', '小李']
  }

  changeCar = () => {
    // this.setState({ carName: '迈巴赫' })

    const obj = this.state
    obj.carName = '迈巴赫'
    this.setState(obj)
  }

  addStu = () => {
    // const { stus } = this.state
    // stus.unshift('小刘')
    // this.setState({ stus })

    const { stus } = this.state
    this.setState({ stus: ['小刘', ...stus] })
  }

  render() {
    console.log('Parent --- render')
    const { carName } = this.state
    return (
      <div className='parent'>
        <h3>我是 Parent 组件</h3>
        {this.state.stus}
        <br />
        <span>我的车名字是: {carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>添加一个小刘</button>
        <Child carName='奥拓' />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child --- render')
    return (
      <div className='child'>
        <h3>我是 Child 组件</h3>
        <span>我接到的车是 {this.props.carName}</span>
      </div>
    )
  }
}
```

<br>

### 10.9 render props

> 向组件内部动态传入带内容的结构(标签)，类似于 vue 的 slot 技术

```jsx
import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是 parent 组件</h3>
        <A render={name => <B name={name} />} />
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    console.log(this.props)
    const { name } = this.state
    return (
      <div className='a'>
        <h3>我是 A 组件</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    const { name } = this.props
    console.log('b --- render')
    return (
      <div className='b'>
        <h3>我是 C 组件 {name}</h3>
      </div>
    )
  }
}
```

<br>

### 10.10 错误边界

> 在父组件写

```jsx
import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasError: '' // 用于标识子组件是否产生错误
  }

  // 当 Parent 的子组件出现报错时,会触发 getDerivedStateFromError 调用,并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      hasError: error
    }
  }

  // 统计错误次数等次数,反馈给服务器
  componentDidCatch(error, info) {
    console.log('渲染组件时出错', error, info)
  }

  render() {
    return (
      <div>
        <h2>我是 Parent 组件</h2>
        {this.state.hasError ? <h2>当前网络不稳定,稍后再试</h2> : <Child />}
      </div>
    )
  }
}
```

<br>

## 11.新版本路由

### 11.1 Routes 替代 Switch

```jsx
import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 路由链接 */}
              <NavLink className='list-group-item' to='/about'>
                About
              </NavLink>
              <NavLink className='list-group-item' to='/home'>
                Home
              </NavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/home' element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

<br>

### 11.2 Navigate 替代 redirect

> 写法和 redirect 挺相似。此外，可以使用 navigate 进行路由跳转

1. redirect 替代：

```jsx
{/* 路由链接 */}
<NavLink className='list-group-item' to='/about'>
  About
</NavLink>
<NavLink className='list-group-item' to='/home'>
  Home
</NavLink>

{/* 注册路由 */}
<Routes>
  <Route path='/about' element={<About />} />
  <Route path='/home' element={<Home />} />
  <Route path='/' element={<Navigate to='/about' />}></Route>
</Routes>
```

2. 路由跳转：

```jsx
import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <Fragment>
      <h3>我是 Home 的内容</h3>
      {sum === 2 ? <Navigate to='/about' replace /> : <h4>当前 sum 的值是: {sum}</h4>}
      <button onClick={() => setSum(2)}>点我将 sum 变成 2</button>
    </Fragment>
  )
}
```

<br>

### 11.3 NavLink 的高亮

> 原先可以通过 activeClassName 来实现，现在需要通过函数的形式来高亮

```jsx
function computedClassName({ isActive }) {
  return isActive ? 'list-group-item yuanke' : 'list-group-item'
}

{/* 路由链接 */}
<NavLink className={computedClassName} to='/about'>
  About
</NavLink>
<NavLink className={computedClassName} to='/home'>
  Home
</NavLink>
```

<br>

### 11.4 路由表

1. 新建路由表:

```jsx
import About from '../pages/About'
import Home from '../pages/Home'
import { Navigate } from 'react-router-dom'

export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  }
]
```

2. 引用路由表：

```jsx
// 根据路由表生成路由的规则
const element = useRoutes(routes)

{/* 路由链接 */}
<NavLink className='list-group-item' to='/about'>
  About
</NavLink>
<NavLink className='list-group-item' to='/home'>
  Home
</NavLink>

{/* 注册路由 */}
{element}
```

<br>

### 11.5 嵌套路由

_routes/index.js_:

```javascript
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import { Navigate } from 'react-router-dom'

export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/about' />
  }
]
```

_App.js_:

```javascript
import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  // 根据路由表生成路由的规则
  const element = useRoutes(routes)
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 路由链接 */}
              <NavLink className='list-group-item' to='/about'>
                About
              </NavLink>
              <NavLink className='list-group-item' end to='/home'>
                Home
              </NavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

_About.jsx_:

```jsx
import React, { Fragment } from 'react'

export default function About() {
  return (
    <Fragment>
      <h3>我是 About 的内容</h3>
    </Fragment>
  )
}
```

_Home.jsx_:

```jsx
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className='nav nav-tabs'>
          <li>
            <NavLink className='list-group-item' to='news'>
              News
            </NavLink>
          </li>
          <li>
            <NavLink className='list-group-item' to='message'>
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件的呈现位置 */}
        <Outlet />
      </div>
    </div>
  )
}
```

_News.jsx_:

```jsx
import React from 'react'

export default function News() {
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
```

_Message.jsx_:

```jsx
import React from 'react'

export default function Message() {
  return (
    <div>
      <ul>
        <li>
          <a href='/message1'>message001</a>&nbsp;&nbsp;
        </li>
        <li>
          <a href='/message2'>message002</a>&nbsp;&nbsp;
        </li>
        <li>
          <a href='/message/3'>message003</a>&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  )
}
```

<br>

### 11.6 路由传参

**params 形式**:

> 使用 `useParams`

```jsx
// 路由表
{
  path: 'message',
    element: <Message />,
    children: [
      {
        path: 'detail/:id/:title/:content',
        element: <Detail />
      }
    ]
}


// 父组件
<ul>
  {messages.map(m => {
    return (
      // 路由链接
      <li key={m.id}>
        <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
      </li>
    )
  })}
</ul>


// 子组件
import React from 'react'
import {
  useParams
  // useMatch
} from 'react-router-dom'

export default function Detail(props) {
  const { id, title, content } = useParams()
  // const x = useMatch('/home/message/detail/:id/:title/:content')
  // console.log(x)
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
```

**search 形式**:

```jsx
;<ul>
  {messages.map(m => {
    return (
      // 路由链接
      <li key={m.id}>
        <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
      </li>
    )
  })}
</ul>

import React from 'react'
import {
  useSearchParams
  // useLocation
} from 'react-router-dom'

export default function Detail(props) {
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  // const x = useLocation()
  // console.log(x)
  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>
          点我更新一下收到的 search 参数
        </button>
      </li>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
```

**state 形式**:

```jsx
;<ul>
  {messages.map(m => {
    return (
      // 路由链接
      <li key={m.id}>
        <Link
          to='detail'
          state={{
            id: m.id,
            title: m.title,
            content: m.content
          }}
        >
          {m.title}
        </Link>
      </li>
    )
  })}
</ul>

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const {
    state: { id, title, content }
  } = useLocation()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
```

<br>

### 11.7 编程式路由导航

**基本使用 - navigate(并使用 state)**：

```jsx
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    { id: '001', title: '消息1', content: '锄禾日当午' },
    { id: '002', title: '消息2', content: '汗滴禾下土' },
    { id: '003', title: '消息3', content: '谁知盘中餐' },
    { id: '004', title: '消息4', content: '粒粒皆辛苦' }
  ])

  const navigate = useNavigate()
  function showDetail(m) {
    navigate('detail', {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content
      }
    })
  }

  return (
    <div>
      <ul>
        {messages.map(m => {
          return (
            // 路由链接
            <li key={m.id}>
              <Link
                to='detail'
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          )
        })}
      </ul>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  )
}
```

**前进、后退**：

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  function forward() {
    navigate(1)
  }

  return (
    <div className='col-xs-offset-2 col-xs-8'>
      <div className='page-header'>
        <h2>React Router Demo</h2>
        <button onClick={back}>&lt;-后退</button>
        <button onClick={forward}>前进-&gt;</button>
      </div>
    </div>
  )
}
```

<br>

### 11.8 useInRouterContext()

> 判断是否被 `BrowserRouter` 包裹

`console.log(useInRouterContext()) // true`：只要引入这个 hook 且被包裹就是 true

<br>

### 11.9 useNavigationType()

1. 作用：返回当前的导航类型（用户是如何来到当前页面的）
2. 返回值：`pop`、`push`、`replace`
3. 备注：`pop` 表示在浏览器中直接打开了这个路由组件（刷新页面）

<br>

### 11.10 useOutlet()

1. 作用：用来呈现当前组件中渲染的嵌套路由
2. 示例代码：

```jsx
const result = useOutlet()
console.log(result) // 如果嵌套路由没有挂载，则 result 为 null；如果嵌套路由已经挂载，则展示嵌套的路由对象
```

<br>

### 11.11 useResolvedPath()

> 作用：给定一个 URL 值，解析其中的 path、search、hash 值

<br>

## 12.前置准备

### 12.1 初始化

1. 安装 ts 版的 react 项目：`create-react-app jira --template typescript`
2. 安装 prettier：`npm install --save-dev --save-exact prettier`
3. 新建：`echo {}> .prettierrc.json`
4. 在代码提交之前，自动对代码进行格式化：` mrm lint-staged`，下为 _package.json_

```json
"lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
```

5. 安装：`npm i eslint-config-prettier -D`，下为 _package.json_

```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "prettier"
  ]
}
```

6. 安装：`npm install --save-dev @commitlint/config-conventional @commitlint/cli`，并运行命令：`echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`
7. 输入：`npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"`

<br>

### 12.2 mock 方案

> 使用 json-server 来实现

**REST API**：

```jsx
GET / tickets // 列表
GET / tickets / 12 // 详情
POST / tickets // 增加
PUT / tickets / 12 // 替换
PATCH / tickets / 12 // 修改
DELETE / tickets / 12 // 删除
```

---

1. 全局安装：`npm i json-server -g`
2. 项目根目录新建 `__json_server_mock__/db.json`
3. _package.json_:

```json
"json-server": "json-server __json_server_mock__/db.json --watch --port 3001"
```

<br>

### 12.3 用 jsx 写一个工程列表功能

![动画](https://cdn.jsdelivr.net/gh//YuanKe3/PHOTO/img/%E5%8A%A8%E7%94%BB.gif)

_index.jsx_:

```jsx
import { useEffect, useState } from 'react'
import qs from 'qs'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject } from 'utils'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  // 用户
  const [users, setUsers] = useState([])

  // 用户名与其 id
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  // 项目
  const [list, setList] = useState([])

  useEffect(() => {
    // 每次 param 已更改就会立即调用 fetch 更新数据
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  )
}
```

_search-panel.jsx_:

```jsx
export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <form>
      <div>
        {/* setParam(Object.assign({}, param, { name: evt.target.value })) */}
        <input
          type='text'
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value
            })
          }
        />
        <select
          value={param.personId}
          onChange={evt =>
            setParam({
              ...param,
              personId: evt.target.value
            })
          }
        >
          <option value={''}>负责人</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
```

_list.jsx_:

```jsx
export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

<br>

### 12.4 自定义防抖 hook 和 useMount 的 hook

```jsx
// 模拟 mount 的 hook
export const useMount = callback => {
  useEffect(() => {
    callback()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// 防抖
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次在 value 变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个 useEffect 处理完以后再运行(react 特性来的,相当于 componentDidUnmount)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}

const debouncedParam = useDebounce(param, 2000)

useEffect(() => {
  // 每次 param 已更改就会立即调用 fetch 更新数据
  fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
    if (response.ok) {
      setList(await response.json())
    }
  })
}, [debouncedParam])
```

<br>

### 12.5 commit 提交规范

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
- workflow: 工作流相关文件修改

<br>

## 13.TypeScript

### 13.1 js 改造成 ts

**qs 库没有声明 ts 的文件的解决办法**：

1. 安装：`npm i -D @types/qs`
2. enjoy it！

**没有能力解决的 ts 类型问题（下下策）**：

```typescript
// @ts-ignore
```

**给 useDebounce 添加泛型**：

> 泛型就是在调用函数时传入参数的类型

```typescript
// 防抖
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次在 value 变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个 useEffect 处理完以后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  // 返回类型也是 V 了
  return debouncedValue
}

// 用户名与其 id
const [param, setParam] = useState({
  name: '',
  personId: ''
})
const debouncedParam = useDebounce(param, 200)
```

<br>

### 13.2 Hook - 泛型 - 数组操作 demo(重要)

```tsx
import { useState } from 'react'

function App() {
  function useArray<P>(persons: P[]) {
    const [value, setValue] = useState(persons)
    // 清除所有状态
    const clear = () => setValue([])
    // 添加一个新成员
    const add = (item: P) => setValue([...value, item])
    // 删除第一项
    const removeIndex = (index = 0) => setValue(value.slice(index + 1))
    return {
      value,
      clear,
      add,
      removeIndex
    }
  }

  const persons: { name: string; age: number }[] = [
    { name: 'jack', age: 25 },
    { name: 'ma', age: 22 }
  ]
  const { value, add, clear, removeIndex } = useArray(persons)

  return (
    <div>
      <button onClick={() => add({ name: 'john', age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: '50px' }} onClick={clear}>
        clear
      </button>
      {value.map((person, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  )
}

export default App
```

<br>

### 13.3 TypeScript 的鸭子类型

> Duck Typing

```typescript
interface Base {
  id: number
}
interface Advance extends Base {
  name: string
}
const test = (p: Base) => {}
// 鸭子类型(duck typing) - 面向接口编程，而不是面向对象编程
const a: Advance = { id: 1, name: 'yuanke' }
test(a) // 不会报错！！！
```

<br>

### 13.4 json-server 注入登录中间件

> 由于 json-server 只支持模拟 restful api 的请求，对于登录这种明显违反 restful api 的请求是无法返回的。故使用中间件解决此问题

_发送请求_：

```tsx
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const username = (event.currentTarget.elements[0] as HTMLInputElement).value
  const password = (event.currentTarget.elements[1] as HTMLInputElement).value
  login({ username, password })
}
```

_\_json_server_mock\_\_/middleware.js_:

```javascript
module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'jack' && req.body.password === '123456') {
      return res.status(200).json({
        user: {
          token: '123'
        }
      })
    } else {
      return res.status(400).json({ message: '用户名或者密码错误' })
    }
  }
  next()
}
```

_package.json_:

```json
"json-server": "json-server __json_server_mock__/db.json --watch --port 3001 --middlewares __json_server_mock__/middleware.js"
```

<br>

### 13.5 auth 服务文件开发

> 包括了登录、注册、注销等功能的实现

_auth-provider.ts_:

```typescript
import { User } from 'screens/project-list/search-panel'
// 在真实环境中，如果使用 firebase 这种第三方 auth 服务的话，本文件不需要开发者开发

const apiUrl = process.env.REACT_APP_API_URL
const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      handleUserResponse(await response.json())
    }
  })
}

export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      handleUserResponse(await response.json())
    }
  })
}

export const logout = () => window.localStorage.removeItem(localStorageKey)
```

<br>

### 13.6 point free 风格

```javascript
function log(str) {
  console.log('haha', str)
}

// 下面两个的形式是等价的，对比可以发现下面第一个式子的 function 部分完全与上面一致，所以可以简写成下面的第二个式子
Promise.resolve('666').then(function (str) {
  log(str)
})
Promise.resolve('666').then(log)
```

<br>

### 13.7 封装 fetch 请求方法

_src/util/http.ts_:

```typescript
import qs from 'qs'
import * as auth from 'auth-provider'
import { useAuth } from 'context/auth-context'

const apiUrl = process.env.REACT_APP_API_URL

// RequestInit 是 fetch 的 config 区域的类型
interface Config extends RequestInit {
  token?: string
  data?: object
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : ''
    },
    // 注意看，customConfig 如果有 POST 的 method，就会覆盖上面的 GET
    ...customConfig
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }

  // axios 和 fetch 表现不一样，axios 可以直接在返回状态不为 2xx 的时候抛出异常
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
    if (response.status === 401) {
      // token 失效
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      // fetch 必须手动抛出异常
      return Promise.reject(data)
    }
  })
}

export const useHttp = () => {
  const { user } = useAuth()
  // TODO: 讲解 TS 操作符
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token })
}
```

<br>

### 13.8 使用 useContext 管理登录相关逻辑

_src/context/auth-context.tsx_:

```tsx
import { ReactNode, useState } from 'react'
import * as auth from 'auth-provider'
import { User } from 'screens/project-list/search-panel'
import React from 'react'
import { http } from 'utils/http'
import { useMount } from 'utils'

interface AuthForm {
  username: string
  password: string
}

// 去 localStorage 找 token 并将信息返回
const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http('me', { token })
    user = data.user
  }
  return user
}

// 创建一个登录的上下文状态进行相关数据的保存
const AuthContext = React.createContext<
  | {
      user: User | null
      register: (form: AuthForm) => Promise<void>
      login: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

// 封装登录相关的 Provider 组件(包裹 <App /> 达到注入全局状态的效果)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))
  // 每次加载时查看是否 token 失效
  useMount(() => {
    bootstrapUser().then(setUser)
  })
  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

// hook 方法，可以调用 AuthContext 的方法
export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 中使用')
  }
  return context
}
```

_入口文件 src/context/index.ts_:

```typescript
import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
```

_index.tsx_:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { loadDevTools } from 'jira-dev-tool'
import { AppProviders } from 'context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
loadDevTools(() =>
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  )
)
```

<br>

### 13.9 TS 的联合类型、Partial 和 Omit 介绍

**类型别名和 interface 区别**：

1. 定义联合类型和交叉类型的时候（`|` 和 `&`），interface 无法替代 type
2. interface 没法实现 utility type

**Parameters 讲解**：

> 将函数的参数以 tuple 的形式提取出来

```typescript
function fun1(a: number, b: string, c: { name: string }) {
  console.log(a, b, c)
}

const useFun1 = () => {
  return ([aa, bb, cc]: Parameters<typeof fun1>) => ({ aa, bb, cc })
}
```

**一些其他的 utility type**：

```typescript
type Person = {
  name: string
  age: number
}

// 全部类型都为可选类型
const xiaoming: Partial<Person> = { name: 'xiaoming' }
// 排除一个类型，这是操作键值对的
const shenMiRen: Omit<Person, 'name'> = { age: 18 }
// 挑选一个类型
const xiaozhang: Pick<Person, 'name'> = { name: 'yuanke' }

type PersonKeys = keyof Person // 'name' | 'age'
// 这是操作联合类型的
type Age = Exclude<PersonKeys, 'name'> // 'age'
```

<br>

### 13.10 一些 utility type 的源码实现

**Partial 实现**：

```typescript
type Partial1<T> = {
  [P in keyof T]?: T[P]
}
```

**Pick 实现**：

```typescript
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

**Exclude 实现**：

```typescript
// 遍历类型 T，发现有 'name' 和 'age'。'name' 属于 'name'，则返回 never；'age' 不属于 'name'，得到保留
type Exclude1<T, U> = T extends U ? never : T
```

**Omit 实现**：

```typescript
type Omit1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```
