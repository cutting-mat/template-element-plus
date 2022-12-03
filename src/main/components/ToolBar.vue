<template>
  <div class="flex-row align-center toolBar">
    <span class="_back" title="返回" @click="propsFinnal.back()">
      <el-icon><arrow-left /></el-icon>
    </span>
    <div class="flex-1 _title">{{ propsFinnal.title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    back: {
      type: Function,
      required: false,
    },
  },
  computed: {
    propsFinnal() {
      return {
        title:
          this.$props.title ||
          (this.$route.meta && this.$route.meta.title) ||
          this.$route.name,
        back: this.$props.back || (() => this.$router.go(-1)),
      };
    },
  },
};
</script>

<style scoped>
.toolBar {
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 8px 0;
  margin: 0 0 16px;
  background: #fff;
  border-bottom: 1px solid #d8dee4;
}
.toolBar ._back {
  display: inherit;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  padding: 0 10px;
}
.toolBar ._back:hover {
  opacity: 0.8;
}
.toolBar ._title {
  font-size: 18px;
  color: #333;
}
</style>
