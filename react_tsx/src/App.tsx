import { memo, useCallback, useState } from 'react'

interface ButtonProps {
  onClick: (param: any) => void
  text: string
}
const Button = function ({ onClick, text }: ButtonProps) {
  console.log('我被渲染了')
  return <button onClick={onClick}>{text}</button>
}

// function NoMemoCandy() {
//   const [count, setCount] = useState(0)
//   const addCount = () => {
//     setCount(prev => prev + 1)
//   }
//   const clearCount = () => {
//     setCount(0)
//   }

//   return (
//     <div className={'memo-candy'}>
//       <div>{count}</div>
//       <div className={'button-container'}>
//         <Button onClick={addCount} text={'Add'} />
//         <Button onClick={clearCount} text={'Clear'} />
//       </div>
//     </div>
//   )
// }

function MemoCandy() {
  const [count, setCount] = useState(0)
  const MemoButton = memo(Button)
  const addCount = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  const clearCount = useCallback(() => {
    setCount(0)
  }, [])
  return (
    <div className={'memo-candy'}>
      <div>{count}</div>
      <div className={'button-container'}>
        <MemoButton onClick={addCount} text={'Add'} />
        <MemoButton onClick={clearCount} text={'Clear'} />
      </div>
    </div>
  )
}

// export default NoMemoCandy
export default MemoCandy
