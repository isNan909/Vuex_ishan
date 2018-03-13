<template>
  <div>
    <h1>Product List One</h1>
    <br><br>
    <h5>List of products:</h5>
    <ul>
      <li v-for="product in products">
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductListOne',
  computed: {
    products(){
      return this.$store.state.products;
    }
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
