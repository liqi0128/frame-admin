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
    show: true,
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
        width: 1
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
      hoverAnimation: false,
      radius: ['85%', '75%'],
      center: ['45%', '50%'],
      startAngle: 180,
      labelLine: {
        show: false
      },
      data: [
        {
          value: 50, itemStyle: {
            color: new echarts.graphic.LinearGradient(
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
              0, 0, 0, 1,
              [
                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                { offset: 1, color: "#005fc1" } // 1 结束颜色
              ]
            )
          }
        },
        { value: 50, itemStyle: { color: '#12274d' } },
        {
          value: 100, itemStyle: {
            color: 'transparent'
          }
        },
      ]
    }
  ]
};

//热榜
export const hotData = [
  {
    name: '北京',
    num: '25.179',
    children: [
      { name: '小洋人', num: '25.179' },
      { name: '好多鱼', num: '20.179' },
      { name: '喜之郎', num: '25.179' },
      { name: '哇哈哈', num: '20.179' },
      { name: '茶Π', num: '25.179' },
      { name: '可爱多', num: '25.179' },
    ]
  },
  {
    name: '河北',
    num: '23.252',
    children: [
      { name: '小洋人1', num: '25.179' },
      { name: '好多鱼1', num: '25.179' },
      { name: '喜之郎1', num: '20.179' },
      { name: '哇哈哈1', num: '25.179' },
      { name: '茶Π1', num: '20.179' },
      { name: '可爱多1', num: '25.179' },
    ]
  },
  {
    name: '上海',
    num: '20.760',
    children: [
      { name: '小洋人2', num: '20.179' },
      { name: '好多鱼2', num: '25.179' },
      { name: '喜之郎2', num: '25.179' },
      { name: '哇哈哈2', num: '20.179' },
      { name: '茶Π2', num: '25.179' },
      { name: '可爱多2', num: '20.179' },
    ]
  },
  {
    name: '江苏',
    num: '23.252',
    children: [
      { name: '小洋人3', num: '25.179' },
      { name: '好多鱼3', num: '20.179' },
      { name: '喜之郎3', num: '25.179' },
      { name: '哇哈哈3', num: '25.179' },
      { name: '茶Π3', num: '20.179' },
      { name: '可爱多3', num: '25.179' },
    ]
  },
  {
    name: '山东',
    num: '22.179',
    children: [
      { name: '小洋人4', num: '20.179' },
      { name: '好多鱼4', num: '25.179' },
      { name: '喜之郎4', num: '20.179' },
      { name: '哇哈哈4', num: '25.179' },
      { name: '茶Π4', num: '25.179' },
      { name: '可爱多4', num: '20.179' },
    ]
  },
]

//地图
var geoCoordMap = {
  '上海': [121.4648, 31.2891],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '乌鲁木齐': [87.9236, 43.5883],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '兰州': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '北京': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '南宁': [108.479, 23.1152],
  '南昌': [116.0046, 28.6633],
  '南通': [121.1023, 32.1625],
  '厦门': [118.1689, 24.6478],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '天津': [117.4219, 39.4189],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '常州': [119.4543, 31.5582],
  '广州': [113.5107, 23.2196],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '拉萨': [91.1865, 30.1465],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  '福州': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '西宁': [101.4038, 36.8207],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '金华': [120.0037, 29.1028],
  '铜川': [109.0393, 35.1947],
  '银川': [106.3586, 38.1775],
  '镇江': [119.4763, 31.9702],
  '长春': [125.8154, 44.2584],
  '长沙': [113.0823, 28.2568],
  '长治': [112.8625, 36.4746],
  '阳泉': [113.4778, 38.0951],
  '青岛': [120.4651, 36.3373],
  '韶关': [113.7964, 24.7028]
};

var XAData = [
  [{ name: '西安' }, { name: '北京', value: 100 }],
  [{ name: '西安' }, { name: '上海', value: 100 }],
  [{ name: '西安' }, { name: '广州', value: 100 }],
  [{ name: '西安' }, { name: '西宁', value: 100 }],
  [{ name: '西安' }, { name: '哈尔滨', value: 100 }]
];

var XNData = [
  [{ name: '西宁' }, { name: '北京', value: 100 }],
  [{ name: '西宁' }, { name: '上海', value: 100 }],
  [{ name: '西宁' }, { name: '广州', value: 100 }],
  [{ name: '西宁' }, { name: '西安', value: 100 }],
  [{ name: '西宁' }, { name: '银川', value: 100 }]
];

var YCData = [
  [{ name: '银川' }, { name: '北京', value: 100 }],
  [{ name: '银川' }, { name: '广州', value: 100 }],
  [{ name: '银川' }, { name: '上海', value: 100 }],
  [{ name: '银川' }, { name: '西安', value: 100 }],
  [{ name: '银川' }, { name: '哈尔滨', value: 100 }],
];

var convertData = function (data) {

  var res = [];
  for (var i = 0; i < data.length; i++) {

    var dataItem = data[i];

    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value
      });
    }
  }
  return res;

};

var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
var series = [];
[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
  series.push(
    {
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', //箭头图标
        symbolSize: 5, //图标大小
      },
      lineStyle: {
        normal: {
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: .3 //尾迹线条曲直度
        }
      },
      data: convertData(item[1])
    },
    {
      name: item[0] + ' Top3',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
});
export let optionMap = {
  tooltip: {
    trigger: 'item',
    formatter: function (params, ticket, callback) {
      return params.name;

    }
  },
  geo: {
    map: 'china',
    zoom:1.2,
    label: {
      emphasis: {
        show: true,
        color: '#fff'
      }
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#142957',
        borderColor: '#195BB9',
        borderWidth: 1,
      },
      emphasis: {
        areaColor: '#2B91B7'
      }
    }
  },
  series: series
};
