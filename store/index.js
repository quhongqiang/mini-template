import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isShow: false,
}

const getters = {
  getIsShow: state => {
    return state.isShow
  }
}
const mutations = {
  isShow(state, n) {
    state.isShow = n;
  },
}
const actions = {
  openLogin (context, n) {
    console.log(context, n)
    context.commit('isShow', n)
  }
}

const store = new Vuex.Store({
	state,
  getters,
  mutations,
  actions
});

export default store;
