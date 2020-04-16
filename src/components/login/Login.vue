<template>
  <div class="login-container">
    登录登录
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
