<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default {
  name: "CuttingMatApp",
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
  created: function () {
    this.$Permission(() => {
      // 初始化用户信息
      this.$store.getUser({
        cache: "update",
      });
    });
  },
};
</script>
