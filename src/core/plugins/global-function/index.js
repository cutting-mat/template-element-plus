/**
 * Vue全局功能注册
 * 输出：
 * 注册用户配置（@/plugin.global-function.config）的全局资源
 * */

// 全局资源配置
import {
  components,
  filters,
  directives,
  $methods,
  methods,
} from "@/plugin.global-function.config";

const resources = {
  components,
  filters,
  directives: Object.assign(
    {
      auth: {
        // 空v-auth指令，避免不开启权限控制时报错
      },
    },
    directives
  ),
  $methods,
  methods,
};

export const install = function (app) {
  // 注册过滤器
  app.config.globalProperties.$filter = resources.filters;

  // 注册组件
  Object.keys(resources.components).forEach((key) => {
    app.component(key, resources.components[key]);
  });

  // 注册全局方法
  Object.keys(resources.methods).forEach((key) => {
    app[key] = resources.methods[key];
  });

  // 注册指令
  Object.keys(resources.directives).forEach((key) => {
    app.directive(key, resources.directives[key]);
  });

  // 注册实例方法
  Object.keys(resources.$methods).forEach((key) => {
    app.config.globalProperties[key] = resources.$methods[key];
  });
};
