<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const HomePage = defineAsyncComponent(
  () => import("../components/HomePage.vue")
);
</script>

<template>
  <div class="flex-col mainLayout">
    <!-- 头部 -->
    <Header />
    <div class="flex-1 flex-row">
      <!-- 菜单 -->
      <SubNav />
      <!-- 首页 -->
      <HomePage v-if="$route.path == '/'" class="flex-1" />
      <!-- 内页 -->
      <router-view v-else class="flex-1 main" />
    </div>
  </div>
</template>

<style scoped>
@import url(../assets/style.css);

.mainLayout {
  height: 100%;
}
.mainLayout .main {
  padding: 0 20px;
}
</style>
