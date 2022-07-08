import * as echarts from 'echarts';
//故障设备监控数据
export const monitorData =[
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
  {tiem:'2020-01-01',address:'拱墅区三宝',code:'89869383'},
]
//异常设备监控数据
export const abnormalData =[
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
  {tiem:'2020-02-02',address:'余杭区杭行路',code:'123456'},
]
//点位分布统计图表数据
export const pointOption = {
  tooltip: {
    backgroundColor:'rgba(50,50,50,0.7)',
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    position: 'top',
    textStyle:{
      color: '#fff',
    },
  },
  grid: {
    left: 0 ,
    top: 0 ,
    right: 0 ,
    bottom: 0 ,
    width: 'auto' ,
    height: 'auto' ,
  },
  series: [
    {
      name: '点位',
      type: 'pie',
      radius: ['10%', '70%'],
      center: 'center',
      roseType: 'area',
      labelLine:{
        normal:{
            length:2,
            length2:4,
        },
      },
      label:{
        fontSize:10
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
    0,0,0,1,
    [
      { offset: 0, color: "#00fffb" }, // 0 起始颜色
      { offset: 1, color: "#0061ce" } // 1 结束颜色
    ]
  ),
  tooltip: {
    trigger: 'item',
    // axisPointer: {
    //   type: 'shadow'
    // }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: 'auto',
    top:'4%',
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
        fontSize:12,
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
