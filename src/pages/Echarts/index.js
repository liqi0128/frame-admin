import './css.less'
import * as echarts from 'echarts';
import { useEffect } from'react'
// 折线图
let foldingOption = {
  title: { //标题
    text: 'Stacked Line'
  },
  tooltip: {//提示框
    trigger: 'axis'
  },
  legend: {//图例组件
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {//工具箱
    feature: {
      saveAsImage: {}//下载图表 
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',//数据堆叠
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
export default function Echarts(){
  // let [myEcharts,setMyEcharts] = useState(null)
  useEffect(()=>{
    // 折线图
    let myChart = echarts.init(document.getElementById('mainfolding'));
    myChart.setOption(foldingOption);
    
  },[])
  return <div className='echarts'>
    <div>图表</div>
    <ul>
      <li>title:标题组件</li>
      <li>tooltip：提示框组件</li>
      <li>legend：图例组件</li>
      <li>toolbox：工具栏</li>
      <li>grid:直角坐标系内绘图网格</li>
      <li>xAxis：直角坐标系grid中的x轴</li>
      <li>yAxis：直角坐标系grid中的y轴</li>
      <li>ceries：系列列表。每一个系列通过type决定自己的图表类型（什么类型的图表）</li>
      <li>color：调色盘颜色列表</li>
    </ul>
    <div id="mainfolding" className='charts'></div>
    <div></div>
    <div id='' className='charts'></div>
  </div>
}