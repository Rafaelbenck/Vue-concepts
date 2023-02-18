<template>
  <div>
    <header class="header">
      <h1 v-if="$slots.title" class="title">
        <slot name="title" />
      </h1>
      <div class="description">
        <slot name="description" />
      </div>
      <div class="slotDefault">
        <slot />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "baseHeader",

  mounted() {
    console.log(this.$slots.title);
  },
};
</script>

<style>
.header {
  background-color: greenyellow;
  color: #000;
}
</style>
