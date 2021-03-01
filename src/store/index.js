import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      console.log("Increment Mutations called");
      state.count++;
    },
  },
  actions: {
    increment(context) {
      console.log("Increment Action called");
      context.commit("increment");
    },
  },
  modules: {},
});
