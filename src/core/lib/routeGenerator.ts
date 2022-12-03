import { createRouter, createWebHashHistory, Router } from "vue-router";

import { BypassRoute } from "@/route.config";

// 路由实例
let routeInstance: Router | null = null;

export default function (config: any) {
  if (!routeInstance) {
    console.log("[Core] Router Start.");

    routeInstance = createRouter({
      scrollBehavior: () => ({ top: 0 }),
      history: createWebHashHistory(),
      routes: BypassRoute,
    });
  }

  if (config && config.beforeEach) {
    routeInstance.beforeEach(config.beforeEach);
  }

  return routeInstance;
}
