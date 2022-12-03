<template>
  <el-radio-group
    v-bind="$attrs"
    v-model="bindValue"
    @change="$emit('update:modelValue', $event)"
  >
    <el-radio :label="null" v-if="nullAble">{{
      $attrs.placeholder || "全部"
    }}</el-radio>
    <el-radio v-for="item in list" :label="item[valueKey]">{{
      item[labelKey]
    }}</el-radio>
  </el-radio-group>
</template>

<script lang="ts">
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
      default() {
        return "value";
      },
    },
    labelKey: {
      type: String,
      required: false,
      default() {
        return "label";
      },
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
      default() {
        return undefined;
      },
    },
    responseTransfer: {
      type: Function,
      required: false,
      default(response) {
        return response;
      },
    },
  },
  data() {
    return {
      bindValue: null,
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
      if (
        !this.$DictcontrolOption &&
        !this.$DictcontrolOption.request &&
        !this.request
      ) {
        return console.warn(
          "DictControl: The required configuration [request] is missing!"
        );
      }

      const DataRequest = this.request || this.$DictcontrolOption.request;
      if (typeof DataRequest !== "function") {
        return console.warn("DictControl: [request] must be a Function!");
      }

      this.list = this.responseTransfer(await DataRequest(this.param));
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style scoped></style>
