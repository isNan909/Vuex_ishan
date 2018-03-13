<template>
  <div id="homepage">
    <h3>{{title}}</h3>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two> 
  </div>
</template>


<script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

export default {
  components: {
     'product-list-one' : ProductListOne,
    'product-list-two': ProductListTwo
  },
  data () {
    return {
      title: 'Vuex Project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color:red;
}
</style>
