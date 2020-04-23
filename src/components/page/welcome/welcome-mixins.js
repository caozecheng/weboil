// import { ajaxMenuList } from '@/assets/javascript/baseAjax.js'
import {obj_gaugeRevo} from '../../../assets/javascript/base_echarts.js'
const shoufayou = require('../../../../static/falseData.json') 
export default {
    data() {
        return {
          rowHeight: null,
          rowCenterHeight: null,
          shoufayou: [],
        }
    },
    beforeCreate: function() {},
    created: function() {
        window.vue = this
    },
    beforeMount: function() {},
    mounted: function() {
      this.rowHeight = (this.$refs.containerHeight.offsetHeight / 3).toFixed(0)
      this.rowCenterHeight = (this.$refs.containerHeight.offsetHeight / 3 * 2).toFixed(0)
      this.shoufayou = shoufayou.shoufayou
      this.initGaugeRevo()
    },
    beforeUpdate: function() {},
    updated: function() {},
    beforeDestroy: function() {

    },
    destroyed: function() {},
    methods: {
      initGaugeRevo(){
        let parm = {value: 50, name: '表盘'}
        obj_gaugeRevo.putECharts('biaopan',{value: parm.value, name: parm.name})
      }
    }
}