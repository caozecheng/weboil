import echarts from 'echarts'
import 'echarts-liquidfill'

//表盘
export const obj_gaugeRevo = {
  // echarts图表实例
  obj_ec: null,
  // 填充数据
  obj_data: '',
  putECharts: function(id, data) {
      if (document.getElementById(id)) {
          // 初始化Echarts实例
          this.obj_ec = echarts.init(document.getElementById(id))
          this.obj_ec.showLoading() // 设置option，绘制图表
          this.obj_data = data
          this.obj_ec.setOption(this.getOptionsByData())
          this.obj_ec.hideLoading()
      } else {
          console.log('DOM element is not initialized')
          return
      }
  },
  resize: function() {
      if (this.obj_ec != null) {
          this.obj_ec.resize()
      } else {
          console.log('The Echarts is not initialized')
      }
  },
  clear: function(id) {
      try {
          if (typeof(id) === 'string') {
              this.obj_ec = echarts.init(document.getElementById(id))
          }
          this.obj_ec.dispose()
      } catch (err) {
          console.log(err.message)
      }
  },
  getOptionsByData: function () {
    let option = {
      graphic: {
        id: 'welcomeGauge',
        elements: [
            { type: 'text', left: '46%', top: '80%', z: 2, zlevel: 100, style: { text: '仓库利用率', textAlign: 'center', fill: '#029AFF', fontSize: '14' } },
        ],
    },
    series: [{
        name: '仓库利用率',
        type: 'gauge',
        radius: '80%',
        center: ['60%', '50%'],
        axisTick: { show: false },
        splitLine: { show: false },
        pointer: { length: '55%', width: 3, },
        axisLine: {
            lineStyle: {
                color: [
                    [1, new echarts.graphic.LinearGradient(1, 0, 0, 1, [{ offset: 0, color: '#1F0EFF' }, { offset: 1, color: '#2D9AFF' }])]
                ],
                width: 12
            }
        },
        axisLabel: { distance: -8, color: '#42E4FB' },
        detail: { formatter: '{value}%', color: '#FFFFFF', fontSize: 18, offsetCenter: ['-3%', '50%'] },
        data: [{ value: 50, name: '' }]
    }]
    };
    return  option
  }
}