<template>
  <div v-loading="loading" class="scrollbar">
    <ToolBar>
      <el-button v-auth="org.add" type="primary" @click="dialogVisible = true">
        <el-icon><plus /></el-icon>
        添加根节点
      </el-button>
    </ToolBar>

    <!-- list -->
    <OrgTree v-if="refresh">
      <template #action="scope">
        <div>
          <el-button v-auth="org.edit" @click="edit(scope.row)">编辑</el-button>
          <el-button v-auth="org.add" @click="add(scope.row)"
            >添加下级</el-button
          >
          <el-button
            type="danger"
            plain
            v-auth="org.remove"
            @click="remove(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </OrgTree>

    <!-- 弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      title="组织信息"
      width="800px"
      :close-on-click-modal="false"
      @close="handleCloseDialog"
    >
      <el-form
        ref="editForm"
        :rules="rules"
        :model="editForm"
        label-width="150px"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>

        <el-form-item label="全称" prop="fullName">
          <el-input v-model="editForm.fullName"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button type="primary" @click="save()">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { deepcopy } from "@/core/util";
import * as org from "../api/org";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    OrgTree: defineAsyncComponent(() => import("../components/OrgTree.vue")),
  },
  data() {
    return {
      org,
      dialogVisible: false,
      sourceDepart: null,
      loading: false,
      list: [],
      queryParam: {},
      editForm: {
        name: "",
        pid: null,
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 1,
            max: 100,
            message: "长度 1 到 100 个字符",
            trigger: "blur",
          },
        ],
        fullName: [
          {
            min: 0,
            max: 255,
            message: "长度 0 到 255 个字符",
            trigger: "blur",
          },
        ],
      },
      refresh: true,
    };
  },
  methods: {
    edit(data) {
      this.editForm = deepcopy(data);
      this.dialogVisible = true;
    },
    add(data) {
      this.editForm = { pid: data.pid };
      this.dialogVisible = true;
    },
    save() {
      let vm = this;
      vm.$refs["editForm"].validate((valid) => {
        if (valid) {
          let formData = deepcopy(vm.editForm);
          this.handleCloseDialog();

          if (!formData.id) {
            org.add(formData).then(() => {
              vm.fetchData();
              vm.$message({
                message: "添加成功",
                type: "success",
              });
            });
          } else {
            org.edit(formData).then(() => {
              vm.fetchData();
              vm.$message({
                message: "编辑成功",
                type: "success",
              });
            });
          }
        }
      });
    },
    handleCloseDialog: function () {
      this.dialogVisible = false;
      this.editForm = {
        name: "",
        pid: null,
      };
      // this.$refs.editForm && this.$refs.editForm.resetFields()
    },
    remove(item) {
      if (!item || !item.id) {
        return null;
      }
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.loading = true;
        org
          .remove({
            id: item.id,
          })
          .then(() => {
            this.loading = false;
            this.fetchData();
            this.$message({
              message: "删除成功",
              type: "success",
            });
          })
          .catch(() => {
            this.loading = false;
          });
      });
    },
    fetchData() {
      this.refresh = false;
      this.$nextTick(() => {
        this.refresh = true;
      });
    },
  },
};
</script>

<style scoped></style>
