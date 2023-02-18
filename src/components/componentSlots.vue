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
  name: "componentSlot",

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

<!-- An example of how it will look in the parent component (App.vue)

 <template>
    <div>
      <the-header>
        <template v-slot:title>
          <h1>home</h1>
        </template>
        <template v-slot:description>
          <p>coteudo que eu quiser</p>
        </template>
      </the-header>
    </div>
  </template>
  
  <script>
  import TheHeader from "./components/TheHeader.vue";
  export default {
    name: "App",
    components: { TheHeader },
  };
  </script>-->
