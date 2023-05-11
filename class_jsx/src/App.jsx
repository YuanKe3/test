import { Fragment } from "react"
import { Component } from "react"

export default class App extends Component {
  render() {
    return <TodoListDemo />
  }
}

class TodoListDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 'id-1',
          title: '标题1'
        },
        {
          id: 'id-2',
          title: '标题2'
        },
        {
          id: 'id-3',
          title: '标题3'
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
        
      </Fragment>
    )
  }
}