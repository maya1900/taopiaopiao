import Vue from 'vue'
import Vuex from 'vuex'

import { comming } from "./moduleMovie/comming";
import { soon } from "./moduleMovie/soon";
import { cinema } from "./moduleMovie/cinema";
import { movieDetail } from "./moduleMovie/movieDetail";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    comming, soon, cinema, movieDetail
  }
})
