import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "john",
      last_name: "Lennon",
      email: "applerecords@gmail.com",
    },
    products: [
      {
        id: 1,
        name: "leash",
        price: 200,
      },
      {
        id: 2,
        name: "deck",
        price: 200,
      },
      {
        id: 3,
        name: "board",
        price: 1600,
      },
    ],
    cart: [],
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user = data;
      // console.log(state);
      console.log(data);
    },

    addProducts(state, data) {
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const index = state.cart.findIndex((obj) => obj.id === id);
      state.cart.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
