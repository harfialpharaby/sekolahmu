import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const BASE_URL = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    appendix: null
  },
  mutations: {
    SET_APPENDIX(state, payload) {
      state.appendix = payload;
    }
  },
  actions: {
    async fetchAppendix(context) {
      try {
        const response = await fetch(`${BASE_URL}/appendix`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        context.commit("SET_APPENDIX", data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
