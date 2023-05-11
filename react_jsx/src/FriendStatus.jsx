import { Fragment, memo } from 'react'

export const FriendStatus = ({ info }) => {
  console.log('child rendering...')
  return (
    <Fragment>
      <span>{info.name}</span>
    </Fragment>
  )
}
