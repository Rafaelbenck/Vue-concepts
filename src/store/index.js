import { createStore } from "vuex";

export default createStore({

  //never save the state directly as it is read-only
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
  getters: {
    total(state) {
      //dependencie
      //return value
      return state.cart.reduce((total, item) => (total += item.price), 0);
    },
  },

  //here you use the commit to trigger the mutations functions
  mutations: {
    storeUser(state, data) {
      state.user = data;
      // console.log(state);
      // console.log(data);
    },

    addProducts(state, data) {
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const index = state.cart.findIndex((obj) => obj.id === id);
      state.cart.splice(index, 1);
    },
  },

  //here you perform the promises inside the vuex
  actions: {
    //here you add promises and create assinc functions
    //actions return promises

    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    }),


    storeUser({ commit }, data) {
      commit("storeUser", data);
    },
  },
  modules: {},
});
