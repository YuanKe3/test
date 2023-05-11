import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// 可以订阅 store
store.subscribe(() => console.log(store.getState()))

// 将我们创建的 action 对象传递给 dispatch
store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(decremented())
