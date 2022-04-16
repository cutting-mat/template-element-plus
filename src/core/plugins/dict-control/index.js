/**
 * 字典控件
 * 输出：
 * 全局组件<DictCascader>
 * 全局组件<DictCheckbox>
 * 全局组件<DictRadio>
 * 全局组件<DictSelect>
 * */
import { defineAsyncComponent } from "vue";

const components = {
    DictCascader: defineAsyncComponent(() => import("./components/DictCascader.vue")),
    DictCheckbox: defineAsyncComponent(() => import("./components/DictCheckbox.vue")),
    DictRadio: defineAsyncComponent(() => import("./components/DictRadio.vue")),
    DictSelect: defineAsyncComponent(() => import("./components/DictSelect.vue")),
}
export const install = function (app, option) {
    app.config.globalProperties.$DictcontrolOption = option || {};

    for (let name in components) {
        app.component(name, components[name])
    }
}

export { default as config } from "@/plugin.dict-control.config";
