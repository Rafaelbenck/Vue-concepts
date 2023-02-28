<template>
  <div>
    <pre>

      <!-- Aqui você consegue todas as informações da rota como objeto -->
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
    //em $route temos os dados da rota atual, para vermos as funcionalidade de schema de roteamento do vue podemos dar um log em '$router'
  },

  methods: {
    login() {
      //login ajax
      this.$router.push("/about"); //você pode usar um objeto aqui
      console.log("chegou");
    },
  },
};
</script>
