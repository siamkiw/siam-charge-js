import Vue from "vue";
import Vuex from "vuex";
import apiServices from "./services/api_services";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: "",
    refresh_token: "",
    expire: "", // date time,
    message: "",
    id: ""
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setRefreshToken(state, payload) {
      state.refresh_token = payload;
    },
    setExpire(state, payload) {
      state.expire = payload;
    },
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setIDFilter(state, payload){
      state.id = payload
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const result = await apiServices.onLogin(payload);

        const res = result.data.responseData;

        if (!res.code === 200 && !res.success) {
          commit("setIsLoggedIn", false);
          commit('setMessage', res.message);
        } else {
          commit("setIsLoggedIn", true);
          commit("setToken", res.data.accessToken);
          commit('setRefreshToken', res.data.refreshToken);
          commit('setExpire', res.data.expiredInMins);
          commit('setMessage', res.message);
        }
        return res;

      } catch (e) {
        console.error(e.response);
      }
    },
    setIDFilter({commit}, payload){
      commit("setIDFilter", payload)
    }
    // async logout({ commit }) {
    // 	try {
    // 		await apiServices.onLogout();
    // 	} catch (e) {
    // 		console.log(e);
    // 	} finally {
    // 		commit('setIsLoggedIn', false);
    // 	}
    // }
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    filterID: (state) => {
      return state.id
    }
  },
});

export default store;
