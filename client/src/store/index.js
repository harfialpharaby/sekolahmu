import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const BASE_URL = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    appendix: null,
    token: localStorage.token || null
  },
  mutations: {
    SET_APPENDIX(state, payload) {
      state.appendix = payload;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    async fetchAppendix(context) {
      try {
        const response = await fetch(`${BASE_URL}/appendix`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        context.commit("SET_APPENDIX", data);
      } catch (error) {
        console.log(error);
      }
    },
    async LoginRegister(context, payload) {
      console.log(payload);

      try {
        const response = await fetch(`${BASE_URL}/users/${payload.action}`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload.form)
        });
        const resJson = await response.json();
        if (typeof resJson === "string") {
          alert(resJson);
        } else {
          localStorage.setItem("token", resJson.token);
          context.commit("SET_TOKEN", resJson.token);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
