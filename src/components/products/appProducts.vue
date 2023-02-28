<!--
 this component will be responsible for pulling all products from 'appProduct'
 and will be responsible for making all the logic and business rules
 this happens when we are working with scalable component data
-->

<template>
  <div>
    <appProduct
      v-for="product in $store.state.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import appProduct from "./appProduct.vue";
export default {
  name: "appProducts",

  component: { appProduct },
};
</script>
