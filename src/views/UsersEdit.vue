<template>
  <div>
    <pre>

      <!-- Here you get all the route information as an object -->
      {{ $route }}
    </pre>
    Usuário <br />

    <button @click="login()"></button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log{this.$route}
    //in $route we have the current route data, to see the vue routing schema functionality we can log in '$router'
  },

  methods: {
    login() {
      //login ajax
      this.$router.push("/about"); //you can use a object here
      console.log("chegou");
    },
  },
};
</script>
