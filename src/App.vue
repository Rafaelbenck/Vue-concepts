<template>
  <div>
    <router-link :to="{ name: 'services' }"> Services</router-link>
    <router-link :to="dinamicRouter"> Users</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      dinamicRouter: { name: "users" },
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
