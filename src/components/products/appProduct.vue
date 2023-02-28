<template>
  <div class="card">{{ product.name }} - {{ product.price }}</div>
  <br />
  <button @click="addProduct()">adicionar</button>
  <button @click="removeProduct()">remover</button>
</template>

<script>
export default {
  name: "appProduct",
  props: {
    product: Object,
  },

  methods: {
    addProduct() {
      this.$store.commit("assProduct", this.product);
      console.log("adicionou");
    },
    removeProduct() {
      this.$store.commit("removeProduct", this.product.id);
    },
  },
};
</script>

<style scoped>
.card {
  background: bisque;
  padding: 6px;
  margin-bottom: 5px;
}
</style>
