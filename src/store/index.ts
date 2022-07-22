import { createStore } from 'vuex'

export default createStore({
  state: {
    userInput: '',
    userData: {},
    loadingPage: false
  },
  getters: {
    userInput: (state): string => state.userInput,
    userData: (state): object => state.userData,
    loadingPage: (state): boolean => state.loadingPage
  },
  mutations: {
    UPDATE_USER_INPUT(state, payload){
      state.userInput = payload
    },
    UPDATE_USER_DATA(state, payload){
      state.userData = payload
    },
    UPDATE_LOADING_PAGE(state, payload){
      state.loadingPage = payload
    }
  },
  actions: {
    updateUserInput(context, userInput) {
      context.commit('UPDATE_USER_INPUT', userInput);
    },
    updateUserData(context, userData) {
      context.commit('UPDATE_USER_DATA', userData);
    },
    updateLoadingPage(context, state) {
      context.commit('UPDATE_LOADING_PAGE', state);
    },
  }
})
