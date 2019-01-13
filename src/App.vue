<template>
  <div class="login-container">
    <div class="form-container">
      <el-form label-position="top" label-width="80px" :model="formData">
        <h2>用户登录</h2>
        <el-form-item label="姓 名:">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码:">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary">主要按钮</el-button>
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
      }
    };
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
