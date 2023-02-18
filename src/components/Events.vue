<template>
  <div>
    <button @click.once="onClick">Send</button>
    <br />
    <div @mouseover="onMouseOver" @mouseout="onMouseOut">Mouse Over</div>
    <br /><br />
    <form action="https://google.com" @submit.prevent="onSubmit">
      <input type="text" @keyup.enter="onKeyUp" />
      <button type="submit">go to google</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {};
  },
  methods: {
    onClick(event) {
      console.log("click", event);
    },
    onMouseOver() {
      console.log("MouseOver");
    },
    onMouseOut() {
      console.log("mouseOut");
    },
    onSubmit() {
      console.log("submit");
    },
    onKeyUp(event) {
      console.log("onKeyUp", event);
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
