import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import AuthService from '../AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    resetState(state, user) {
      state.user = {}
    },
  },
  actions: {
    //#region Account Register/Login/Logout
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "Home" })
      } catch (e) {
        console.error(e)
      }
    },
    async login({ commit, dispatch }, creds) {
      debugger
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "Home" })
      } catch (e) {
        console.error(e)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.error(e)
      }
    },
    //#endregion
  }
})