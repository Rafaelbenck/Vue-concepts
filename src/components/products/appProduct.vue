<template>
  <div class="card">{{ product.name }} - {{ product.price }}</div>
  <br />
  <button @click="addProduct()">adicionar</button>
  <button v-if="InCart" @click="removeProduct()">remover</button>
</template>

<script>
import calculateDiscountMixin from "./calculateDiscountMixin.vue";

export default {
  name: "appProduct",
  data() {
    return {
      InCart: false,
    };
  },
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

  mixins: [calculateDiscountMixin],

  created() {
    this.calculateDiscount();
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
