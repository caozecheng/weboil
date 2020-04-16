<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="main center">
      <div class="title-container">
        <div class="title"></div>
      </div>
      <el-form-item prop="userName">
        <span class="svg-container">
          <i class="icon-user"></i>
        </span>
        <el-input v-model="loginForm.userName" placeholder="请输入用户名" name="userName" type="text" clearable auto-complete="on" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" style="font-size: 22px;"></i>
        </span>
        <el-input v-model="loginForm.password" placeholder="请输入密码" name="password" @keyup.enter.native="handleLogin('loginForm')" clearable auto-complete="on" show-password />
      </el-form-item>
      <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
      <el-button class="loginbtn" type="primary" @click.native.prevent="handleLogin('loginForm')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
// 导入属于自己的 mixins 文件
import mix from "./login-mixin";
export default {
  mixins: [mix],
};
</script>
<style lang="less" scoped>
@import url("./login.less");
</style>
