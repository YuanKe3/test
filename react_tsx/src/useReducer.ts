// import { useReducer } from 'react'

import { useReducer } from 'react'

// type State = {
//   count: number
//   comment: string
// }

// type Action = {
//   type: 'increment' | 'decrement'
//   payload: number
// }

// export const useCounter = () => {
//   const [state, dispatch] = useReducer(
//     (state: State, action: Action) => {
//       const { comment, count } = state
//       const { payload, type } = action
//       switch (type) {
//         case 'increment': {
//           return { count: count + payload, comment: comment + payload }
//         }
//         case 'decrement': {
//           return { count: count - payload, comment: comment + payload }
//         }
//       }
//     },
//     { comment: '', count: 0 } as State
//   )
//   const increment = (payload: number) => dispatch({ type: 'increment', payload })
//   const decrement = (payload: number) => dispatch({ type: 'decrement', payload })
//   return {
//     ...state,
//     increment,
//     decrement
//   }
// }

type State = {
  tocs: Array<Record<PropertyKey, any>>
}

type Action = {
  type: 'addToc' | 'delToc'
  payload: Record<PropertyKey, any>
}

export const useTocs = () => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      const { tocs } = state
      const { payload, type } = action
      switch (type) {
        case 'addToc': {
          return [...tocs, payload]
        }
        case 'delToc': {
          return tocs.filter(toc => JSON.stringify(toc) !== JSON.stringify(payload)) as any
        }
      }
    },
    { tocs: [] } as State
  )
  const addToc = (payload: Record<PropertyKey, any>) => dispatch({ type: 'addToc', payload })
  const delToc = (payload: Record<PropertyKey, any>) => dispatch({ type: 'delToc', payload })
  return {
    ...state,
    addToc,
    delToc
  }
}
