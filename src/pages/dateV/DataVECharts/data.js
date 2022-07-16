import * as echarts from 'echarts';
//故障设备监控数据
export const monitorData = [
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
  { tiem: '2020-01-01', address: '拱墅区三宝', code: '89869383' },
]
//异常设备监控数据
export const abnormalData = [
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
  { tiem: '2020-02-02', address: '余杭区杭行路', code: '123456' },
]
//点位分布统计图表数据
export const pointOption = {
  tooltip: {
    backgroundColor: 'rgba(50,50,50,0.7)',
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    position: 'top',
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 'auto',
    height: 'auto',
  },
  series: [
    {
      name: '点位',
      type: 'pie',
      radius: ['10%', '70%'],
      center: 'center',
      roseType: 'area',
      labelLine: {
        normal: {
          length: 2,
          length2: 4,
        },
      },
      label: {
        fontSize: 10
      },
      data: [
        { value: 26, name: '杭州' },
        { value: 22, name: '黑龙江' },
        { value: 24, name: '上海' },
        { value: 20, name: '山东' },
        { value: 28, name: '北京' },
        { value: 30, name: '河南' },
        { value: 18, name: '湖南' },
        { value: 16, name: '广东' }
      ]
    }
  ]
};

//全国用户总量统计图表数据
export const barOption = {
  color: new echarts.graphic.LinearGradient(
    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
    0, 0, 0, 1,
    [
      { offset: 0, color: "#00fffb" }, // 0 起始颜色
      { offset: 1, color: "#0061ce" } // 1 结束颜色
    ]
  ),
  tooltip: {
    backgroundColor: 'rgba(50,50,50,0.7)',
    trigger: 'item',
    textStyle: {
      color: '#fff',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: 'auto',
    top: '4%',
    //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
    containLabel: true,
    // 是否显示直角坐标系网格
    show: true,
    //grid 四条边框的颜色
    borderColor: "rgba(0, 240, 255, 0.3)"
  },
  xAxis: [
    {
      type: 'category',
      data: ['重庆', '成都', '河南', '合肥', '深圳', '北京', '上海'],
      axisTick: {
        alignWithLabel: false,
        // 把x轴的刻度隐藏起来
        show: false
      },
      axisLabel: {
        color: "#4c9bfd",
        fontSize: 12,
      },
      // x轴这条线的颜色样式
      axisLine: {
        lineStyle: {
          color: "rgba(0, 240, 255, 0.3)"
          // width: 3
        }
      },
    }
  ],
  yAxis: [
    {
      type: "value",
      axisTick: {
        alignWithLabel: false,
        // 把y轴的刻度隐藏起来
        show: false
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      // y轴这条线的颜色样式
      axisLine: {
        lineStyle: {
          color: "rgba(0, 240, 255, 0.3)"
          // width: 3
        }
      },
      // y轴分割线的颜色样式
      splitLine: {
        lineStyle: {
          color: "rgba(0, 240, 255, 0.3)"
        }
      }
    }
  ],
  series: [
    {
      name: '用户总量',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

//销售额统计图表
export const salesOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(50,50,50,0.7)',
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    right: '8%',
    textStyle: {
      color: '#FFF',
      fontSize: 10
    },
    data: ['预期销售额', '实际销售额']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '20%',
    borderColor: "#012f4a",
    containLabel: true,
    show: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      alignWithLabel: false,
      // 把y轴的刻度隐藏起来
      show: false
    },
    axisLabel: {
      color: "#4c9bfd"
    },
    // y轴这条线的颜色样式
    axisLine: {
      lineStyle: {
        color: "rgba(0, 240, 255, 0.3)"
        // width: 3
      }
    },
    // y轴分割线的颜色样式
    splitLine: {
      lineStyle: {
        color: "rgba(0, 240, 255, 0.3)"
      }
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    name: '单位:万',
    nameTextStyle: {
      color: 'rgba(0, 240, 255, 0.3)',
      fontSize: 10,
      padding: [0, 0, -10, 20],
    },
    axisTick: {
      alignWithLabel: false,
      // 把y轴的刻度隐藏起来
      show: false
    },
    axisLabel: {
      color: "#4c9bfd"
    },
    // y轴这条线的颜色样式
    axisLine: {
      lineStyle: {
        color: "rgba(0, 240, 255, 0.3)"
        // width: 3
      }
    },
    // y轴分割线的颜色样式
    splitLine: {
      lineStyle: {
        color: "rgba(0, 240, 255, 0.3)"
      }
    }
  },
  series: [
    {
      name: '预期销售额',
      symbol: 'circle',
      type: 'line',
      smooth: true,
      data: []
    },
    {
      name: '实际销售额',
      symbol: 'circle',
      type: 'line',
      smooth: true,
      data: []
    },
  ]
};

export const salesData = {
  year: {
    expected: [116, 417, 366, 193, 352, 171, 78, 259, 326, 417, 328, 477],
    actual: [26, 456, 69, 221, 427, 40, 350, 423, 140, 113, 61, 464]
  },
  season: {
    expected: [145, 252, 293, 148, 66, 236, 323, 379, 34, 173, 162, 355],
    actual: [68, 384, 79, 209, 129, 117, 236, 130, 311, 63, 98, 34]
  },
  month: {
    expected: [265, 163, 136, 247, 250, 176, 124, 146, 229, 25, 260, 101],
    actual: [287, 268, 128, 123, 142, 157, 260, 79, 119, 247, 99, 242]
  },
  week: {
    expected: [44, 156, 115, 79, 156, 14, 182, 22, 15, 35, 99, 41],
    actual: [144, 15, 61, 143, 191, 82, 165, 98, 131, 128, 54, 153]
  },

}
//雷达图
export const radarOption = {
  tooltip: {
    show: true ,
    backgroundColor: 'rgba(50,50,50,0.7)',
    textStyle: {
      color: '#fff',
    },
  },
  radar: {
    indicator: [
      { name: '机场' },
      { name: '地铁' },
      { name: '汽车站' },
      { name: '火车站' },
      { name: '商场' }
    ],
    splitArea: {
      show: false
    },
    axisName: {
      fontSize: 10
    },
    center: ['50%', '50%'],
    radius: '50%',
    shape: 'circle',
    axisLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },

  },
  series: [
    {
      type: 'radar',
      areaStyle: {
        color: 'rgba(238,197,102,0.6)',
        opacity: 0.6
      },
      lineStyle: {
        color: '	#ffa500',
        width:1
      },
      itemStyle: {
        color: '#FFF',
      },
      data: [
        {
          name: '渠道分布',
          label: {
            show: true,
            fontSize: 10,
            color: '#FFF',
          },
          value: [2, 3, 2, 5, 6]
        }
      ]
    }
  ]
};
//饼型图
export const pieOption = {
  series: [
    {
      name: '销售进度',
      type: 'pie',
      hoverAnimation:false,
      radius: ['85%', '75%'],
      center: ['45%', '50%'] ,
      startAngle:180,
      labelLine: {
        show: false
      },
      data: [
        { value: 50,itemStyle:{
          color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
              { offset: 0, color: "#00c9e0" }, // 0 起始颜色
              { offset: 1, color: "#005fc1" } // 1 结束颜色
            ]
          )
        }},
        { value: 50,itemStyle:{color:'#12274d'}},
        { value: 100,itemStyle:{
          color:'transparent'
        }},
      ]
    }
  ]
};

//热榜
export const hotData=[
  {
    name:'北京',
    num:'25.179',
    children:[
      {name:'小洋人',num:'25.179'},
      {name:'好多鱼',num:'20.179'},
      {name:'喜之郎',num:'25.179'},
      {name:'哇哈哈',num:'20.179'},
      {name:'茶Π',num:'25.179'},
      {name:'可爱多',num:'25.179'},
    ]
  },
  {
    name:'河北',
    num:'23.252',
    children:[
      {name:'小洋人1',num:'25.179'},
      {name:'好多鱼1',num:'25.179'},
      {name:'喜之郎1',num:'20.179'},
      {name:'哇哈哈1',num:'25.179'},
      {name:'茶Π1',num:'20.179'},
      {name:'可爱多1',num:'25.179'},
    ]
  },
  {
    name:'上海',
    num:'20.760',
    children:[
      {name:'小洋人2',num:'20.179'},
      {name:'好多鱼2',num:'25.179'},
      {name:'喜之郎2',num:'25.179'},
      {name:'哇哈哈2',num:'20.179'},
      {name:'茶Π2',num:'25.179'},
      {name:'可爱多2',num:'20.179'},
    ]
  },
  {
    name:'江苏',
    num:'23.252',
    children:[
      {name:'小洋人3',num:'25.179'},
      {name:'好多鱼3',num:'20.179'},
      {name:'喜之郎3',num:'25.179'},
      {name:'哇哈哈3',num:'25.179'},
      {name:'茶Π3',num:'20.179'},
      {name:'可爱多3',num:'25.179'},
    ]
  },
  {
    name:'山东',
    num:'22.179',
    children:[
      {name:'小洋人4',num:'20.179'},
      {name:'好多鱼4',num:'25.179'},
      {name:'喜之郎4',num:'20.179'},
      {name:'哇哈哈4',num:'25.179'},
      {name:'茶Π4',num:'25.179'},
      {name:'可爱多4',num:'20.179'},
    ]
  },
]

