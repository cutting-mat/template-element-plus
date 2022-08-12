// 搜索vue组件（排除以'__'开头）
const ctx = import.meta.glob("./!(__)*.vue", { eager: true });
const components = {};
Object.keys(ctx).forEach((key) => {
  const fileName = key
    .replace(/^\.\//, "")
    .replace(/\.vue$/, "")
    .replace(/\//g, "-");
  components[fileName] = ctx[key].default;
});
// console.log('core components:', components)
export default components;
