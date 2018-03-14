<template>
  <div>
    <h1>Product List One</h1>
    <br><br>
    <h5>List of products:</h5>
    <ul>
      <li v-for="product in reduceStock">
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
    </ul>
    <button type="button" v-on:click="addPrice">Add Price</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'reduceStock'
        ])
    },
    methods: {
        ...mapActions([
            'addPrice'
        ])
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
