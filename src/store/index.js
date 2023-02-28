import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "john",
      last_name: "Lennon",
      email: "applerecords@gmail.com",
    },
    products: [],
    cart: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
