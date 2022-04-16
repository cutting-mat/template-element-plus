/**
 * 全局组件
 * */
import { defineAsyncComponent } from "vue";
import Header from '@/main/components/Header.vue'
import SubNav from '@/main/components/SubNav.vue'
import ToolBar from '@/main/components/ToolBar.vue'
import Pagination from '@/main/components/Pagination.vue'

export const components = {
    Header,
    SubNav,
    ToolBar,
    Pagination,
}

/**
 * 全局过滤器
 * */
export const filters = {
    "test"() {
        return "test filters"
    }
}

/**
 * 全局指令
 * */
export const directives = {
    'test': {
        mounted(el) {
            setTimeout(() => {
                el.innerText += ' test directive inject!'
            }, 0)
        }
    }
}

/**
 * 实例方法
 * */
export const $methods = {
    $test() {
        // 用于测试可删除
        return ('test instance method output!')
    }
}

/**
 * 全局方法
 * */
export const methods = {
    Test() {
        return ('test globalMethod output!')
    }
}
