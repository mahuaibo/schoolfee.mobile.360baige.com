import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  publicParameters: {
    backPath: '',
    domain: 'http://192.168.0.101:30000/cloud/mobile/schoolFee/v1',
    localAccessToken: 'fd611f19fcb9945343e0d68c9c7f64769b44d289'
  },
  feeData: {
    list: []
  },
  projectData: {
    list: [],
    totalPrice: 0
  },
  projectDetailData: {
    name: null,
    desc: null,
    link: null
  },
  historyData: {
    list: [],
    total: 0
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
