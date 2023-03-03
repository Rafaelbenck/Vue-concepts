<template>
  <div>
    <appButton data-vue="Rafael" @update="getUpdate">
      Save
      <template #icon>icon</template>
    </appButton>
    <!-- 
    
    <app-hook v-if="showAppHook" />
    <button @click="showAppHook = !showAppHook">Alterar valor</button>
    <br /><br />
    <h1>{{ fullName }}</h1>

    <br />
    <br />
    <h3>Primeiro nome:</h3>
    {{ user.first_name }}
    <h3>Segundo nome:</h3>
    {{ user.last_name }}

    <br />
    <br />

    <button @click="user.first_name = 'Bill'">Atualizar nome</button>
    
    ////////////////////////////////////////////////////////////////////////////////////
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
    <appProducts />
    {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
    <br />
    <button @click="updateUser()">Update User</button>-->
  </div>
</template>

<script>
// import appProducts from "./components/products/appProducts.vue";
import appHook from "./components/appHook.vue";
import appButton from "./components/appButton.vue";
import { ref, computed, reactive, watch } from "vue";
export default {
  components: { appHook, appButton },
  //Options API
  // data() {
  //   return {
  //     dinamicRoute: { name: "services" },
  //     // $store,
  //   };
  // },
  // component: {
  //   appProducts,
  // },
  // methods: {
  //   updateUser() {
  //     const newUser = {
  //       first_name: "rafael",
  //       last_name: "benck",
  //       email: "rafaelbenckc@gmail.com",
  //     };

  // this.$store.dispatch("storeUser", newUser).then(() => {
  //   console.log("teste");
  // });
  // },
  // },
  // created() {
  // console.log(this.$store.state.user);
  // this.$store.commit("storeUser");
  // },

  //this replaces the created(hook) phase of a component
  //COMPOSITION API
  setup() {
    //logic here

    //this not include in component template
    // let name = "Rafael";

    //this replace methods in composition API
    // const changeName = () => {
    //logic here
    // name = "benck";
    // };

    //but here reproduct, just return object, is not reactive
    // return {
    // name,
    // changeName,
    // };

    const getUpdate = (data) => {
      console.log("getUpdate", data);
    };

    const showAppHook = ref(true);

    const user = ref({
      first_name: "Pedro",
      last_name: "Pascal",
    });

    //how used computed and watch in composition api

    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`;
    });

    //if you need to look directly at an object item you will need to make it a function and return it as a callback, this first param
    watch(
      //simple completed object
      // user,
      // callback:
      () => user.value.first_name,
      () => {
        console.log("Analisando o obj user");
      },
      {
        deep: true,
      }
    );

    return {
      user,
      fullName,
      showAppHook,
      getUpdate,
    };
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
