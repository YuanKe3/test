import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'yuanke',
    info: {
      hobby: 'ball',
      address: 'beijing'
    }
  },
  getters: {
    cuteName: (state, getters) => {
      return `cute ${state.name}`
    }
  },
  mutations: {
    getName(state) {
      console.log(state.name)
    },
    setName(state, { name }) {
      state.name = name
    }
  },
  actions: {
    async slowlyGetName(context) {
      return (await context.state.name) + ' slowly'
    }
  }
})
