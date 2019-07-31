import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    home
  },
  strict: debug
})

export default store
