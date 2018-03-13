<template>
  <div>
    <h1>Product List Two</h1>
    <br><br>
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
  name: 'ProductListTwo',
  computed: {
    products(){
      return this.$store.state.products
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
