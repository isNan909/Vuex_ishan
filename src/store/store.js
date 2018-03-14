import Vue from 'vue'
import Vuex from 'vuex';

Vue.use (Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name:'iMac',price:400},
      {name:'Macbook',price:800},
      {name:'Dell',price:300},
      {name:'Acer',price:150},
      {name:'HP',price:650},
      {name:'Sony',price:620}
    ]
  },
  getters: {
      reduceStock: state => {
          var reduceStock = state.products.map( product => {
              return {
                  name:  '**' + product.name + '**',
                  price: product.price / 2,
              };
          });
          return reduceStock;
      }
  },
  mutations: {
    addPrice: state =>{
      state.products.forEach(product =>{
        product.price += 1;
      })
    }
  }
})
