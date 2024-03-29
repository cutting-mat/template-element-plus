<template>
  <div v-loading="loading">
    <ToolBar>
      <el-button
        v-if="!picker"
        v-auth="dict.add"
        type="primary"
        @click="dialogVisible = true"
      >
        <el-icon><plus /></el-icon>
        添加
      </el-button>
    </ToolBar>

    <!-- list -->
    <el-table :data="list" style="width: 100%" @row-click="handleRowClick">
      <el-table-column label="选择" width="50" align="center" v-if="picker">
        <template #default="scope">
          <el-icon
            :class="{
              checkIcon: true,
              checked: scope.row.dictCode === currentChecked.dictCode,
            }"
            ><success-filled
          /></el-icon>
        </template>
      </el-table-column>
      <el-table-column v-else type="index" width="50"> </el-table-column>
      <el-table-column
        prop="dictName"
        label="名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="dictCode"
        label="CODE"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" width="300" align="center" v-if="!picker">
        <template #default="scope">
          <el-button v-auth="dict.edit" @click="edit(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-auth="dict.itemEdit"
            type="warning"
            plain
            @click="editItem(scope.row)"
            >数据维护</el-button
          >
          <el-button
            v-auth="dict.remove"
            type="danger"
            plain
            @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- page -->
    <Pagination
      :page-size="queryParam.pageSize"
      :current-page="queryParam.p"
      :total-count="totalCount"
      :total-page="totalPage"
      @current-change="handleCurrentChange"
    ></Pagination>
    <!-- 弹窗 -->
    <el-dialog
      :close-on-click-modal="false"
      title="字典信息"
      v-model="dialogVisible"
      width="600px"
      @close="handleCloseDialog"
    >
      <el-form
        ref="editForm"
        :rules="rules"
        :model="editForm"
        label-width="80px"
      >
        <el-form-item label="名称" prop="dictName">
          <el-input v-model="editForm.dictName"></el-input>
        </el-form-item>
        <el-form-item label="CODE" prop="dictCode">
          <el-input
            v-model="editForm.dictCode"
            :readonly="!!editForm.id"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="editForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button type="primary" @click="save">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 数据维护 -->
    <DictEditer
      v-model="editerVisible"
      :dict-code="editForm.dictCode"
      @close="editerVisible = false"
    />
  </div>
</template>

<script lang="ts">
import { deepcopy } from "@/core/util";
import * as dict from "../api/dict";
import { defineAsyncComponent } from "vue";

export default {
  props: {
    picker: {
      type: Boolean,
      required: false,
      default: false,
    },
    picked: {
      type: Object,
      required: false,
      default: function () {
        return {};
      },
    },
  },
  components: {
    DictEditer: defineAsyncComponent(
      () => import("../components/DictEditer.vue")
    ),
  },
  data() {
    return {
      dict,
      dialogVisible: false,
      editerVisible: false,
      loading: false,
      list: [],
      editForm: {
        dictName: "",
        dictCode: "",
        remark: "",
      },
      queryParam: {
        pageSize: 20,
        p: 1,
        dictName: "",
        testNull: null,
        testStr: "",
      },
      totalCount: 0,
      totalPage: 0,
      rules: {
        dictName: [
          { required: true, message: "请输入字典名称", trigger: "blur" },
          {
            min: 1,
            max: 100,
            message: "长度 1 到 100 个字符",
            trigger: "blur",
          },
        ],
        dictCode: [
          { required: true, message: "请输入字典CODE", trigger: "blur" },
          {
            min: 1,
            max: 100,
            message: "长度 1 到 100 个字符",
            trigger: "blur",
          },
        ],
      },
      currentChecked: {},
    };
  },
  watch: {
    picked: {
      handler: function (picked) {
        this.currentChecked = picked;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleRowClick(row) {
      if (this.picker) {
        this.currentChecked = row;
        this.$emit("change", row);
      }
    },
    editItem(data) {
      const editObj = Object.assign({}, data);
      this.editForm = editObj;
      this.editerVisible = true;
    },
    resetSearch() {
      this.queryParam.dictName = "";
      this.fetchData(true);
    },
    handleCurrentChange(currentPage) {
      this.queryParam.p = currentPage;
      this.fetchData();
    },
    edit: function (data) {
      const editObj = Object.assign({}, data);
      this.editForm = editObj;
      this.dialogVisible = true;
    },
    save() {
      this.$refs["editForm"].validate((valid) => {
        if (valid) {
          let formData = deepcopy(this.editForm);
          this.handleCloseDialog();

          if (!formData.id) {
            dict.add(formData).then(() => {
              this.fetchData();
              this.$message({
                message: "添加成功",
                type: "success",
              });
            });
          } else {
            dict.edit(formData).then(() => {
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
    handleCloseDialog: function () {
      this.dialogVisible = false;
      this.editForm = {
        dictName: "",
        dictCode: "",
        remark: "",
      };
      this.$refs.editForm && this.$refs.editForm.resetFields();
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
          .remove({
            dictCode: item.dictCode,
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
    fetchData: function (reload) {
      if (reload) {
        this.queryParam.p = 1;
      }
      this.loading = true;
      dict.list(this.queryParam).then((res) => {
        this.loading = false;
        const data = res.data;
        if (data) {
          this.list = data.list;
          this.totalCount = data.totalCount;
          this.totalPage = data.totalPage;
        }
      });
    },
  },
  created: function () {
    this.fetchData();
  },
};
</script>

<style scoped>
.dict-box {
  padding: 20px 20px 0;
}
.checkIcon {
  color: #ccc;
}
.checkIcon.checked {
  color: #409eff;
}
</style>
