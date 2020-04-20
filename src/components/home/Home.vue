<template>
  <div class="flox">
    <div class="container">
      <div class="header">
        <div class="header-img"></div>
        <div class="menu">
          <el-dropdown>
            <el-button type="primary"></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-menu text-color="rgb(191, 203, 217)" active-text-color="rgb(71, 136, 255)" background-color="#071234" :default-active="activeIndex" @select="handleSelect" router>
                <NavMenu :navMenus="menuData"></NavMenu>
              </el-menu>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>油库统计</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入属于自己的 mixins 文件
import mix from "./home-mixin";
import NavMenu from "./navMenu/NavMenu";
export default {
  mixins: [mix],
  components: {
    NavMenu
  }
};
</script>
<style lang="less" scoped>
@import url("./home.less");
</style>
