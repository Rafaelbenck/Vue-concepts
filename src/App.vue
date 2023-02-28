<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link :to="dinamicRoute">Services </router-link>
      <router-link to="/users/10"> usuario 10</router-link>
    </nav>
    <router-view />
    <h1>
      {{ $store.state.use.first_name }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dinamicRoute: { name: "services" },
      $store,
    };
  },
  created() {
    console.log(this.$store.state.user);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
