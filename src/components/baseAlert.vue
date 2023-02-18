<!-- important for using parent-to-child event emission and properties
you should always think that when you are going to use an event, this event must be passed as props by the parent
and emit (emit -> event) from the child
-->

<template>
  <div :class="baseClassAlert">
    <slot />
    <button @click="onClick" class="btnClose">x</button>
  </div>
</template>

<script>
export default {
  name: "baseAlert",

  //We declare props to change the component's property, in our case defining whether it is success or error
  // it's interesting to always pass props to behavior, if you are in doubt about using a slot, think that
  // Slot is more interesting for injecting content
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },

  computed: {
    baseClassAlert() {
      return ["alert", this.variant ? `alert-${this.variant}` : ``];
    },
  },

  methods: {
    onClick() {
      this.$emit("close");
      console.log("clicou");
    },
  },
};
</script>

<style scoped>
.btnClose {
  border-radius: 80px;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 15px;
}
.btnClose:hover {
  transform: scale(1.2);
  transition: all 0.5s;
}
.alert {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  border-radius: 10px;
  background-color: dimgray;
  color: aliceblue;
}

.alert-success {
  background-color: greenyellow;
  color: #000;
}

.alert-warning {
  background-color: yellow;
  color: #000;
}

.alert-error {
  background-color: crimson;
  color: aliceblue;
}
</style>

<!-- An example of how it will look in the parent component (App.vue) 

  <template>
    <div>
      <baseAlert v-if="showAlert" :variant="variant" @close="onClose">
        {{ text }}
      </baseAlert>
    </div>
  </template>

  <script>
  import baseAlert from "./components/baseAlert.vue";
  export default {
    name: "App",
    components: { baseAlert },
    data() {
      return {
        showAlert: true,
        variant: "",
        text: "Thanks for apply!",
      };
    },

    methods: {
      onClose() {
        this.showAlert = false;
        console.log("on Close");
      },
    },
  };
  </script -->
