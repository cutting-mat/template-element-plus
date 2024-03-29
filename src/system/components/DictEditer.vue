<template>
  <el-drawer
    v-model="isVisible"
    direction="rtl"
    size="900px"
    :withHeader="false"
    @opened="handleInit"
    @close="requireClose"
  >
    <div class="flex-col myform" v-loading="loading">
      <ToolBar title="字典数据维护" :back="requireClose">
        <el-button
          v-auth="dict.itemAdd"
          type="primary"
          @click="dialogVisible = true"
        >
          <el-icon><plus /></el-icon>
          添加数据
        </el-button>
      </ToolBar>
      <div class="flex-1 scrollbar">
        <el-table
          :data="list"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
        >
          <el-table-column prop="value" label="值"></el-table-column>
          <el-table-column
            prop="dictCode"
            label="CODE"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" width="300" align="center">
            <template #default="scope">
              <el-button v-auth="dict.itemEdit" @click="edit(scope.row)"
                >编辑</el-button
              >
              <el-button v-auth="dict.itemEdit" @click="append(scope.row)"
                >添加下级</el-button
              >
              <el-button
                v-auth="dict.itemRemove"
                type="danger"
                plain
                @click="remove(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 数据编辑 -->
      <el-dialog
        :close-on-click-modal="false"
        title="字典数据"
        v-model="dialogVisible"
        width="600px"
        append-to-body
        @close="handleCloseDialog"
      >
        <el-form
          ref="editForm"
          :rules="rules"
          :model="editForm"
          label-width="80px"
        >
          <el-form-item label="值" prop="value">
            <el-input v-model="editForm.value"></el-input>
          </el-form-item>
          <el-form-item label="CODE" prop="dictCode">
            <el-input v-model="editForm.dictCode"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <div>
            <el-button type="primary" @click="save">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { deepcopy, buildTree } from "@/core/util";
import * as dict from "../api/dict";

export default {
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    dictCode: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isVisible: this.visible,
      dict,
      loading: true,
      dialogVisible: false,
      queryParam: {
        dictCode: "",
      },
      list: [],
      editForm: {
        pid: "",
        value: "",
        dictCode: "",
      },
      rules: {
        value: [
          { required: true, message: "请输入数据值", trigger: "blur" },
          {
            min: 1,
            max: 100,
            message: "长度 1 到 100 个字符",
            trigger: "blur",
          },
        ],
        dictCode: [
          {
            min: 1,
            max: 100,
            message: "长度 1 到 100 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    dictCode: {
      handler() {
        this.queryParam.dictCode = this.dictCode;
      },
      immediate: true,
    },
  },
  methods: {
    append(data) {
      this.editForm.pid = data.id;
      this.dialogVisible = true;
    },
    edit(data) {
      const editObj = Object.assign({}, data);
      this.editForm = editObj;
      this.dialogVisible = true;
    },
    save() {
      this.$refs["editForm"].validate((valid) => {
        if (valid) {
          let formData = deepcopy(this.editForm);
          formData.dictCode = this.queryParam.dictCode;
          this.handleCloseDialog();
          this.loading = true;

          if (!formData.id) {
            dict.itemAdd(formData).then(() => {
              this.fetchData();
              this.$message({
                message: "添加成功",
                type: "success",
              });
            });
          } else {
            dict.itemEdit(formData).then(() => {
              this.fetchData();
              this.$message({
                message: "编辑成功",
                type: "success",
              });
            });
          }
        }
      });
    },
    remove(item) {
      if (!item) {
        return null;
      }
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        dict
          .itemRemove({
            id: item.id,
          })
          .then(() => {
            this.fetchData();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          });
      });
    },
    handleCloseDialog: function () {
      this.editForm = {
        pid: "",
        value: "",
        dictCode: "",
      };
      this.dialogVisible = false;
    },
    requireClose() {
      this.list = [];
      this.$emit("close");
    },
    fetchData() {
      this.loading = true;
      dict.itemList(this.queryParam).then((res) => {
        this.loading = false;
        this.list = buildTree(res.data);
      });
    },
    handleInit() {
      if (this.queryParam.dictCode) {
        this.fetchData();
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.myform {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
