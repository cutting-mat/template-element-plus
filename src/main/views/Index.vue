<template>
  <!-- 为模块单独分配模板 -->
  <LayoutBlank v-if="$route.path.indexOf('/data-v') === 0" />
  <!-- 统一模板 -->
  <LayoutMain v-else />
</template>

<script lang="ts">
import LayoutMain from "./LayoutMain.vue";
import LayoutBlank from "./LayoutBlank.vue";

export default {
  components: {
    LayoutMain,
    LayoutBlank,
  },
};
</script>
