<template>
  <el-form
    ref="form"
    :model="formData"
    :rules="rules"
    label-position="left"
    class="auth_email"
    :v-loading="loading"
  >
    <el-form-item v-if="anonymousEmail"
      >安全邮箱：{{ anonymousEmail }}</el-form-item
    >
    <el-form-item prop="inputEmail">
      <el-input
        size="large"
        v-model="formData.inputEmail"
        placeholder="请输入安全邮箱"
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="userInput">
      <el-input
        size="large"
        v-model="formData.userInput"
        placeholder="请输入验证码"
      >
        <template #append>
          <countdownButton
            ref="countdownButton"
            :count="30"
            @click="sendValidCode"
          >
            获取验证码
          </countdownButton>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="large"
        style="width: 100%"
        @click="handleSubmit"
      >
        立即验证
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  emailValidCode,
  validEmailValidCode,
} from "@/core/plugins/auth/api/auth";

export default {
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入安全邮箱"));
      } else {
        if (this.userEmail) {
          // 已登录/有邮箱用户，校验邮箱是否匹配
          if (this.userEmail !== value) {
            return callback(new Error("邮箱不正确"));
          }
        }

        callback();
      }
    };

    return {
      loading: false,
      formData: {
        id: null,
        userInput: null,
        inputEmail: null,
      },
      rules: {
        inputEmail: [{ validator: validateEmail, trigger: [] }],
        userInput: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 6, message: "请输入正确的验证码", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    userEmail() {
      return this.$store.state.user.email || "";
    },
    anonymousEmail() {
      if (this.userEmail) {
        const mailName = this.userEmail.split("@")[0].split("");
        const mailNameStr = mailName
          .map((s, i) => {
            if (i === 0 || i === mailName.length - 1) {
              return s;
            }
            return "*";
          })
          .join("");
        return `${mailNameStr}@${this.userEmail.split("@")[1]}`;
      }
      return "";
    },
  },
  methods: {
    sendValidCode() {
      this.$refs.form.validateField("inputEmail", (valid) => {
        if (valid) {
          this.loading = true;
          emailValidCode({
            email: this.formData.inputEmail,
          })
            .then((res) => {
              this.loading = false;
              // 验证码已经发送
              if (res.status === 200) {
                this.formData.id = res.data.id;
                this.$refs.countdownButton.start();
              } else {
                this.$message.warning(`验证邮件发送失败，请稍后重试`);
              }
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
    handleSubmit() {
      this.$refs.form.validateField("userInput", (valid) => {
        if (valid) {
          this.loading = true;
          validEmailValidCode(this.formData)
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

<style scoped>
.auth_email :deep(.el-input-group__append) {
  background-color: #409eff;
  border: 0;
}
.auth_email :deep(.el-input-group__append .el-button) {
  border-radius: 0;
  margin: 0 -20px;
}
.auth_email :deep(.el-input-group__append .countdownButton) {
  color: #fff;
  background-color: #409eff;
  border: 1px solid #409eff;
}

.auth_email :deep(.el-input-group__append .el-button.is-disabled) {
  background-color: #a0cfff;
  border-color: #a0cfff;
}
</style>
