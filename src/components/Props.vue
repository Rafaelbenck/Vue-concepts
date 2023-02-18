<template>
  <div>
    <baseAlert :variant="variant" />
  </div>
</template>

<script>
import baseAlert from "./components/baseAlert.vue";
export default {
  name: "App",
  components: { baseAlert },
  data() {
    return {
      variant: "success",
      text: "",
    };
  },

  watch: {},

  computed: {},

  methods: {},
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  margin: 60px;
}
</style>
