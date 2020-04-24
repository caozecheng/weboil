<template>
  <div class="welcome" ref="containerHeight">
    <div class="welcome-main">
      <el-row gutter=20>
        <el-col :span="6" :style="{height: rowHeight + 'px', 'padding-left': '20px'}">
          <div class="border-right item">
            <div class="title">油品收发油数据</div>
            <div class="biaoge">
              <table border="0" cellpadding="0" cellspacing="0" style="width: 90%; margin: auto;">
                <thead>
                  <tr>
                    <th>油品</th>
                    <th>总量</th>
                    <th>发油量</th>
                    <th>收油量</th>
                    <th>损溢量</th>
                  </tr>
                  <tr v-for="(item, i) in shoufayou" :key="'shoufayou_' + i">
                    <td class="white-space">{{item.oilName}}</td>
                    <td style="color: #4788FF;">{{item.oilMass}}</td>
                    <td style="color: #FEC576;">{{item.oilMass}}</td>
                    <td style="color: #1ACFFF;">{{item.oilMass}}</td>
                    <td style="color: #DA625E;">{{item.oilMass}}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </el-col>
        <el-col :span="12" :style="{height: rowCenterHeight + 'px'}">
          <div class="point"></div>
          <div class="map">
            <img src="../../../assets/images/home/map.png" alt="">
          </div>
        </el-col>
        <el-col :span="6" :style="{height: rowHeight + 'px'}">
          <div class="border-left item">
            <div class="title">仓库利用率</div>
            <div id="biaopan" class="biaopan"></div>
            <div class="content-left">
              <div class="revo-table-item">
                <p>周转天数</p>
                <p>110天</p>
              </div>
              <div class="revo-table-item">
                <p>平均库存</p>
                <p>10吨</p>
              </div>
              <div class="revo-table-item">
                <p>周转率</p>
                <p>50%</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :style="{height: rowHeight + 'px'}">
          <div class="border-left item title">消防</div>
        </el-col>
        <el-col :span="6" style="padding-left: 5px" :style="{height: rowHeight + 'px', 'position':'absolute',  top:  rowHeight + 'px', 'padding-left': '20px'}">
          <div class="border-left item title">油库</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script >
import mix from "./welcome-mixins"
export default {
  mixins: [mix]
};
</script>

<style>
@import url("./welcome.less");
</style>
