/**
 * 混合全局用户配置与props默认值

 */

export const mixin = {
    computed: {
        propsFinnal() {
            const getDefaultValue = (key) => {
                if (this.$props[key] === undefined) {
                    if (Object.keys(this.$DictcontrolOption).indexOf(key) !== -1) {
                        return this.$DictcontrolOption[key];
                    }
                }

                return this.$props[key];
            };
            const result = {};
            Object.keys(this.$props).forEach((prop) => {
                result[prop] = getDefaultValue(prop);
            });
            return result;
        }
    }
}
