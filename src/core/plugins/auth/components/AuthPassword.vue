<template>
  <el-form
    ref="form"
    :model="formData"
    :rules="rules"
    label-position="left"
    class="auth_email"
    :v-loading="loading"
    @submit.native.prevent="handleSubmit"
  >
    <el-form-item prop="password">
      <el-input
        v-model="formData.password"
        placeholder="请输入当前登录密码"
        show-password
      >
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button native-type="submit" type="primary" style="width: 100%">
        立即验证
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { validPassword } from "@/core/plugins/auth/api/auth";

export default {
  name: "AuthPassword",
  emits: ["success"],
  data() {
    return {
      loading: false,
      formData: {
        password: null,
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "请输入正确的密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validateField("password", (err) => {
        if (!err) {
          this.loading = true;

          validPassword({
            password: this.formData.password,
          })
            .then((res) => {
              this.loading = false;
              if (res.status === 200) {
                this.$emit("success", res.data);
              } else {
                this.$refs.form.resetFields();
                this.$message.warning(`验证失败`);
              }
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style scoped></style>
