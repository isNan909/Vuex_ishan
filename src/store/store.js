import Vue from 'vue'
import Vuex from 'vuex';

Vue.use (Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name:'iMac',price:650},
      {name:'Macbook',price:650},
      {name:'Dell',price:650},
      {name:'Acer',price:650},
      {name:'HP',price:650},
      {name:'Sony',price:650}
    ]
  }
})
