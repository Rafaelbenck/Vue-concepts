<template>
  <button @click="$emit('update', true)">
    {{ variant }}
    <slot></slot>
    <slot name="icon" />
  </button>
</template>

<!-- you can set props directly with setup script in scope like this -->
<!-- <script setup>
import { defineProps } from "vue";
defineProps({
  variant: {
    type: String,
    default: "Sucesso",
  },

});
</script> -->

<!-- that way you will be able to debug better -->
<script>
import { emit } from "process";

export default {
  props: {
    variant: {
      type: String,
      default: "Sucesso",
    },
  },

  setup(props, { emit }) {
    // console.log(slots);

    const sendData = () => {
      emit("update", true);
    };

    return {
      sendData,
    };
  },
};
</script>
