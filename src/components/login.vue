<template>
  <div class="login-container">
    <div class="form-container">
      <el-form
        label-position="top"
        label-width="80px"
        :model="formData"
        :rules="rules"
        ref="ruleForm"
      >
        <h2>用户登录</h2>
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="submitForm('ruleForm')">登 录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请选择活动区域", trigger: "change" },
          { min: 6, message: "密码太短了", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          //调用验证接口
          this.$axios.post("login", this.formData).then(res => {
            console.log(res);
            if (res.data.meta.status == 200) {
              //登录成功
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              });
            } else if (res.data.meta.status == 400) {
              //登录失败
              this.$message.error(res.data.meta.msg);
            }
          });
        } else {
          this.$message.error('请填写用户名和密码');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 580px;
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    .btn-login {
      width: 100%;
    }
  }
}
</style>
