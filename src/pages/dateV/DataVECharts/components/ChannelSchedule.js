import { useEffect} from'react'
import {
  radarOption,
  pieOption,
} from'../data'
import * as echarts from 'echarts';
function ChannelSchedule(){

  useEffect(()=>{
    let radarCharts = echarts.init(document.getElementById('radarCharts'))
    radarCharts.setOption(radarOption)

    let pieCharts = echarts.init(document.getElementById('pieCharts'))
    pieCharts.setOption(pieOption)
    window.addEventListener('resize',()=>{
      radarCharts.resize()
      pieCharts.resize()
    })
  },[])
  return <div className='channel-schedule'>
    <div className='channel  panel'>
      <div className="hed">渠道分布</div>
      <div id="radarCharts"></div>
    </div>
    <div className='schedule  panel'>
      <div className="hed">一季度销售进度</div>
      <div id="pieCharts"></div>
      <div className='schedule-value'>
        <div>50%</div>
        <div>
          <div>1,321</div>
          <div>150%</div>
        </div>
        <div>
          <div>销售额(万元)</div>
          <div>同比增长</div>
        </div>
      </div>
    </div>
    </div>
}
export default ChannelSchedule