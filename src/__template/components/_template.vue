<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
