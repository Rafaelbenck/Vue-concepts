<template>
  <div>Hook</div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from "vue";
//hooks for interage with lifecycle vuejs in composition API
// setup is a created fase dont worry this

onBeforeMount(() => {
  console.log("onBeforeMounted");
});

onMounted(() => {
  console.log("onMounted");
});

//remember that the disassembly phase is perfect for you to destroy everything that remains in the component's memory
onBeforeUnmount(() => {
  console.log("BeforeUnmotend");
});

onUnmounted(() => {
  console.log("Unmounted");
});
</script>
