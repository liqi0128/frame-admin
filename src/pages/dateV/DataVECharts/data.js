
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
//点位分布统计数据
export const pointOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
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
      radius: ['10%', '90%'],
      center: ['50%', '50%'],
      roseType: 'area',
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
