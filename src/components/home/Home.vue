<template>
  <div class="home-container">
    <div class="header">
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
    </div>

  </div>
</template>

<script>
// 导入属于自己的 mixins 文件
import mix from "./home-mixin";
export default {
  mixins: [mix],
};
</script>
<style lang="less" scoped>
@import url("./home.less");
</style>
