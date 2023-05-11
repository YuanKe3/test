import { Fragment, useState } from 'react'

export default function App() {
  const [name, setName] = useState('yuanke')
  const userInfo = { name }
  return (
    <Fragment>
      <div>
        Parent &nbsp;
        <button onClick={() => setName('keke')}>setName</button>
      </div>
      <Child userInfo={userInfo} />
    </Fragment>
  )
}

function Child({ userInfo }) {
  const [name, setName] = useState(userInfo.name)
  return (
    <Fragment>
      <p>Child, props name: {userInfo.name}</p>
      <p>Child, state name {name}</p>
    </Fragment>
  )
}
