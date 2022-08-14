/**
 * 全局组件
 * */
import { defineAsyncComponent } from "vue";
import Header from "@/main/components/Header.vue";
import SubNav from "@/main/components/SubNav.vue";
import ToolBar from "@/main/components/ToolBar.vue";
import Pagination from "@/main/components/Pagination.vue";

export const components = {
  Header,
  SubNav,
  ToolBar,
  Pagination,
  CountDown: defineAsyncComponent(() => import("@/core/components/CountDown")),
  InputNumber: defineAsyncComponent(() =>
    import("@/core/components/InputNumber")
  ),
  InputPassword: defineAsyncComponent(() =>
    import("@/core/components/InputPassword")
  ),
};

/**
 * 全局过滤器
 * */
import { formatDate } from "@/core/util";
export const filters = {
  date: formatDate,
};

/**
 * 全局指令
 * */
export const directives = {
  test: {
    inserted(el) {
      setTimeout(() => {
        el.innerText += " test directive inject!";
      }, 0);
    },
  },
};

/**
 * 实例方法
 * */
import { clipboard } from "@/core";

export const $methods = {
  $clipboard: clipboard,
};

/**
 * 全局方法
 * */

export const methods = {
  Test() {
    return "test globalMethod output!";
  },
};
