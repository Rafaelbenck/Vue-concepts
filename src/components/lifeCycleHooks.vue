<!-- It is necessary to understand the fundamentals of each type of HOOK

//Creation
    // Starts the process of preparing the component
    //Ajax and initialize variables
    // does not have access to the template (DOM)

  //assembly
    // Initialize or iterate an external lib (new Lib())
    //makes the assembly of your component on the web and allows access to the (DOM)

  //update
    //Needed to debug your code
    //The update process will be used a lot

  //disassembly
    //It will remove what is necessary (lib->destroy/remove/clear()) in order to free up memory and bring performance
 -->
<template>
  <div>
    <TheHeader v-if="showHeader" />
    <h1>Show me from behind the wall</h1>

    <input type="text" v-model="name" />
    <h3>{{ name }}</h3>

    <button @click="toggleHeader">active or dont active</button>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "lifeCycleHooks",
  components: { TheHeader },
  data() {
    return {
      name: "Rafael Benck gostosão",
      showHeader: true,
    };
  },

  //HOOKS
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("update");
  },
  //here he doesn't have access to the component's state, you can't interact with him here
  beforeCreate() {
    console.log("beforeCreated");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  created() {
    console.log("created");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  beforeMount() {
    //Here we destroy our libs, events and listeners
    console.log("beforeMounted");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  mounted() {
    console.log("mounted");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  beforeUnmount() {
    console.log("beforeUnmount");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  unmounted() {
    console.log("unmounted");
    console.log("Estado: ", this.name);
    console.log("DOM", this.$el);
  },

  watch: {},

  computed: {},

  methods: {
    toggleHeader() {
      this.showHeader = !this.showHeader;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 60px;
}
</style>
