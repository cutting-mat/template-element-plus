<template>
  <div class="orgPick-box">
    <el-input
      :size="size"
      readonly
      :modelValue="showTitle"
      placeholder="请选择"
      @click="dialogVisible = true"
    ></el-input>
    <!-- 弹窗 -->
    <el-dialog
      custom-class="custom-dialog"
      append-to-body
      :close-on-click-modal="false"
      title="选择组织"
      v-model="dialogVisible"
      width="1000px"
      destroy-on-close
      @open="checkedNode = []"
    >
      <div class="orgPicker">
        <OrgTree :value="list" picker @pick="checkedNode = $event"></OrgTree>
      </div>
      <template #footer>
        <el-button type="primary" @click="submit">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { toRaw } from "vue";
import { buildTree, deepcopy } from "@/core";
import { list } from "../api/org";
import { defineAsyncComponent } from "vue";

export default {
  props: {
    modelValue: {
      // 已选中机构id
      type: [Number, String],
      required: false,
    },
    adapter: {
      // 输入框显示适配
      type: Function,
      required: false,
      default(value) {
        return value;
      },
    },
    size: {
      type: String,
      required: false,
    },
  },
  components: {
    OrgTree: defineAsyncComponent(() => import("../components/OrgTree.vue")),
  },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      list: [],
      checkedNode: [],
    };
  },
  computed: {
    showTitle() {
      return this.adapter(this.modelValue);
    },
  },
  methods: {
    fetchData: function () {
      this.loading = true;
      list()
        .then((res) => {
          this.loading = false;
          if (res.data) {
            this.list = buildTree(res.data);
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    submit() {
      const checkedNode = toRaw(this.checkedNode);
      if (checkedNode && checkedNode[0]) {
        this.$emit(
          "update:modelValue",
          this.checkedNode[0].id,
          deepcopy(checkedNode[0])
        );
      }

      this.dialogVisible = false;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.orgPicker {
  height: 50vh;
  min-height: 350px;
}
.orgPicker ._side {
  width: 280px;
  border-right: 1px solid #f5f5f5;
  margin-right: 12px;
}
.orgPicker ._keyword {
  padding: 0 12px 12px;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 12px;
}
.orgPicker ._action {
  text-align: center;
  margin-top: 20px;
}
</style>
