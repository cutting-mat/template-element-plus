/**
 * 状态管理
 * */
import { createPinia, defineStore } from "pinia";
import config from "@/plugin.store.config";

export const pinia = createPinia();
const useStore = defineStore("main", config);

export const store = useStore(pinia);

export const install = function (app) {
  app.use(pinia);

  app.config.globalProperties.$store = store;
};
