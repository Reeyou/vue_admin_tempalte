import vuex from 'vuex'
import vue from 'vue'

import menu from './module/menu'

vue.use(vuex)

export default new vuex.Store({
  modules : {
    menu
  }
})