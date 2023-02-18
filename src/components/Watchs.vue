<!-- Observadores de rotina -->
<template>
  <div>
    <input v-model="name" type="text" /> <br />
    {{ name }}
    <br /><br />

    <input v-model="user.firstName" type="text" /> <br />
    <br />
    <input v-model="user.lastName" type="text" /> <br />
    {{ fullName }}
    <br />

    <select v-model="pageCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br />
    {{ pageCount }}
  </div>
</template>

<script>
export default {
  name: "Watchs",
  data() {
    return {
      name: "",
      pageCount: 1,
      user: {
        firstName: "",
        lastName: "",
      },
    };
  },

  // Think about creating your routines here, when you have too many I recommend using (methods:)
  watch: {
    name(value) {
      if (value.length >= 3) {
        this.saveUserName();
      }
    },
    pageCount() {
      this.changePage();
    },

    //We can create an object to do the same
    user: {
      //handler() will help with changing the object's attribute when the function is executed
      handler() {
        console.log("user alterado");
      },
      //deep will deeply observe each attribute of the object being changed
      deep: true,
    },
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  //Interesting that you do all your logic and business rules here
  methods: {
    saveUserName() {
      console.log("Ajax");
      console.log(this.name);
    },
    changePage() {
      console.log("Ajax do change page");
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
