<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
