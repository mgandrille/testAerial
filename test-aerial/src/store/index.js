import Vue from 'vue'
import Vuex from 'vuex'
import json from '@/assets/MOCK_DATA.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    addProductToCart(state, product) {
      const duplicatedProductIndex = state.cart.findIndex(item => item.id === product.id);
      if(duplicatedProductIndex !== -1) {
        state.cart[duplicatedProductIndex].qty++;
        return;
      }
      product.qty = 1
      state.cart.push(product);
    },

    removeProductToCart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    getProducts({ commit }) {
      // console.log(json);
      let datas = []
      for(var i in json) {
        datas.push([i, json[i]])
      }
      commit('setProducts', datas)
    },
  },
  modules: {
  }
});
