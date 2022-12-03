<template>
  <el-menu
    v-if="showMenu"
    class="custom-menu scrollbar"
    :default-active="activeIndex"
    router
    unique-opened
  >
    <template v-for="(route, index) in list">
      <el-sub-menu
        v-if="route.children && route.children.length"
        :route="route"
        :index="route.name"
      >
        <template #title>
          <div class="first flex-row align-center">
            <i
              v-if="route.meta && route.meta.icon"
              class="ion ico"
              v-html="route.meta && route.meta.icon"
            >
            </i>
            <span>
              {{ (route.meta && route.meta.title) || route.name }}
            </span>
          </div>
        </template>
        <template v-for="(child, ci) in route.children" :key="'child' + ci">
          <!-- 三层 -->
          <template v-if="child.children && child.children.length">
            <el-menu-item :route="child" :index="child.name">
              <template #title>
                {{ (child.meta && child.meta.title) || child.name }}
              </template>
            </el-menu-item>
            <el-menu-item
              v-for="(grandson, grandsonindex) in child.children"
              :route="grandson"
              :index="grandson.name"
              class="third"
            >
              <template #title>
                <span class="flex-row align-center">
                  {{ (grandson.meta && grandson.meta.title) || grandson.name }}
                </span>
              </template>
            </el-menu-item>
          </template>
          <!-- 两层 -->
          <el-menu-item
            v-else
            :route="child"
            :index="child.name"
            class="second"
          >
            <template #title>
              <span class="flex-row align-center">
                {{ (child.meta && child.meta.title) || child.name }}
              </span>
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <!-- 一层 -->
      <el-menu-item
        v-else
        :route="route"
        :index="route.name"
        class="flex-row align-center one"
      >
        <i
          v-if="route.meta && route.meta.icon"
          class="ion ico"
          v-html="route.meta && route.meta.icon"
        >
        </i>
        <template #title>
          {{ (route.meta && route.meta.title) || route.name }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { MainRoute } from "@/route.config";
import { deepcopy } from "@/core/util";
// 过滤隐藏路由，扩展fullPath
let filterRoutes = function (routeArray, base) {
  const array = routeArray.filter((e) => !e.meta || !e.meta.hide);
  return array.map((item) => {
    const route = deepcopy(item);
    let pathKey =
      route.path.indexOf("/") === 0
        ? route.path
        : [base, route.path].join(base === "/" ? "" : "/");
    // 扩展fullPath
    route.fullPath = pathKey;
    // 扩展meta
    if (!route.meta) {
      route.meta = {};
    }
    if (Array.isArray(route.children)) {
      route.children = filterRoutes(route.children, pathKey);
    }
    return route;
  });
};

export default {
  props: {
    subMenu: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      list: [],
      showMenu: true,
    };
  },
  computed: {
    menu: function () {
      return this.$AccessControl
        ? this.$store.DynamicRoute[0].children
        : filterRoutes(MainRoute[0].children);
    },
    activeIndex() {
      if (this.$route.meta && this.$route.meta.belong) {
        return this.$route.meta.belong;
      }
      return this.$route.name;
    },
  },
  watch: {
    $route: {
      handler(newRoute) {
        if (!this.subMenu) {
          return null;
        }
        let targetIndex = -1;
        if (Array.isArray(this.list)) {
          targetIndex = this.list.findIndex((item) => {
            return newRoute.path.indexOf(item.fullPath) === 0;
          });
        }

        if (targetIndex === -1) {
          //console.log("切换主栏目");
          let arr = this.menu.slice();
          let result;
          for (let i = 0; i < arr.length; i++) {
            if (
              this.$route.path.indexOf(arr[i].path) === 0 &&
              arr[i].children
            ) {
              result = arr[i].children;
              break;
            }
          }
          this.list = result;
          this.showMenu = false;
          this.$nextTick(() => {
            this.showMenu = true;
          });
        }
      },
      immediate: true,
    },
  },
  created() {
    if (!this.subMenu) {
      this.list = this.menu;
    }
  },
};
</script>

<style scoped>
.custom-menu {
  width: 260px;
  padding: 10px;
  box-sizing: border-box;
  background: #f5f6f7;
}
.custom-menu :deep(.el-menu) {
  border-right: 0;
  background: transparent;
}
.custom-menu :deep(.ico) {
  font-size: 1.3em;
  display: inline-block;
  margin-right: 8px;
}
.custom-menu :deep(.el-menu-item),
.custom-menu :deep(.el-sub-menu__title) {
  min-width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  color: #555;
}
.custom-menu li {
  margin-top: 2px;
}

.custom-menu :deep(.second) {
  padding-left: 40px;
  padding-right: 0;
  box-sizing: border-box;
  color: #555;
  border-radius: 6px;
}

.custom-menu :deep(.is-active) {
  color: #0265ed;
  background: #e6ecf8;
}
.custom-menu :deep(.el-menu-item:hover) {
  background: #e6ecf8;
}
.custom-menu :deep(.el-menu-item-group__title) {
  color: rgba(52, 104, 248, 0.8);
  padding: 12px 0;
}
.custom-menu ul > li:last-child {
  margin-bottom: 0;
}
.custom-menu :deep(.el-sub-menu .el-menu) {
  padding: 0 20px;
}
.custom-menu :deep(.el-sub-menu.is-active.is-opened) {
  background: transparent;
}
</style>
