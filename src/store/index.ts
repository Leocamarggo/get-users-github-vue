import { createStore } from 'vuex'

export default createStore({
  state: {
    userInput: '',
    userData: {}
  },
  getters: {
    userInput: (state): string => state.userInput,
    userData: (state): object => state.userData
  },
  mutations: {
    UPDATE_USER_INPUT(state, payload){
      state.userInput = payload
    },
    UPDATE_USER_DATA(state, payload){
      state.userData = payload
    }
  },
  actions: {
    updateUserInput(context, userInput) {
      context.commit('UPDATE_USER_INPUT', userInput);
    },
    updateUserData(context, userData) {
      context.commit('UPDATE_USER_DATA', userData);
    },
  }
})
