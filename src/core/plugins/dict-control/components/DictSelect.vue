<template>
  <el-select
    v-bind="$attrs"
    v-model="bindValue"
    @change="$emit('update:modelValue', $event)"
  >
    <el-option
      :label="$attrs.placeholder || '全部'"
      value=""
      v-if="nullAble"
    ></el-option>
    <el-option
      v-for="item in list"
      :label="item[propsFinnal.labelKey || 'label']"
      :value="item[propsFinnal.valueKey || 'value']"
    ></el-option>
  </el-select>
</template>

<script>
import { mixin } from "../assets/util";

export default {
  mixins: [mixin],
  props: {
    modelValue: {
      type: [String, Number],
      required: false,
    },
    valueKey: {
      type: String,
      required: false,
    },
    labelKey: {
      type: String,
      required: false,
    },
    nullAble: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
    },
    request: {
      type: Function,
      required: false,
    },
    param: {
      type: String,
      required: false,
    },
    responseTransfer: {
      type: Function,
      required: false,
      default(response) {
        return response.data;
      },
    },
  },
  data() {
    return {
      bindValue: "",
      list: [],
    };
  },
  watch: {
    modelValue: {
      handler() {
        if (this.modelValue) {
          this.bindValue = this.modelValue;
        }
      },
      immediate: true,
    },
  },
  methods: {
    fetchData: async function () {
      const DataRequest = this.propsFinnal.request;
      if (typeof DataRequest !== "function") {
        return console.warn(
          "DictControl: The required configuration [request] is missing!"
        );
      }
      if (typeof DataRequest !== "function") {
        return console.warn("DictControl: [request] must be a Function!");
      }
      this.list = this.propsFinnal.responseTransfer(
        await DataRequest(this.param)
      );
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped></style>
