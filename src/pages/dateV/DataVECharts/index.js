import './css.less'
import {monitorData,abnormalData,pointOption,barOption} from'./data'
import { useState ,useEffect} from'react'
import * as echarts from 'echarts';


export default function DataVECharts(){
  const [active ,setActive] = useState(1)
  useEffect(()=>{
    let myChart = echarts.init(document.getElementById('pointCharts'));
    myChart.setOption(pointOption);
    let barCharts = echarts.init(document.getElementById('barCharts'))
    barCharts.setOption(barOption)
    window.addEventListener('resize',()=>{
      myChart.resize()
      barCharts.resize()
    })
  },[])

  return <div className="dataVECharts">
    <div className='viewport'>
      <div className='header'>
          大屏可视化
      </div>
      <div className='main'>
        {/* 左侧 */}
        <div className='column'>
          <div className='overview  panel'>
            <ul>
              <li>
                <div>2,190</div>
                <div>设备总数</div>
              </li>
              <li>
                <div>190</div>
                <div>季度新增</div>
              </li>
              <li>
                <div>3,001</div>
                <div>运营设备</div>
              </li>
              <li>
                <div>108</div>
                <div>异常设备</div>
              </li>
            </ul>
          </div>
          {/* 监控区域 */}
          <div className='monitor  panel'>
            <div className='tbs'>
              <div className={(active === 1) && ('active') || ('')} onClick={()=>{setActive(1)}}>故障设备监控</div>
              <div className={(active === 2) && ('active') || ('')} onClick={()=>{setActive(2)}}>异常设备监控</div>
            </div>
            <div className="content">
              <div className="hed">
                <div className="col">故障时间</div>
                <div className="col">设备地址</div>
                <div className="col">异常代码</div>
              </div>
              <div className="marquee-view">
                <div className="marquee">
                  {
                    (active === 1) &&
                    (monitorData.map((item,index)=>{
                      return <div className="row" key={index}>
                        <div className="col">{item.tiem}</div>
                        <div className="col">{item.address}</div>
                        <div className="col">{item.code}</div>
                      </div>
                    })) ||
                    (abnormalData.map((item,index)=>{
                      return <div className="row" key={index}>
                        <div className="col">{item.tiem}</div>
                        <div className="col">{item.address}</div>
                        <div className="col">{item.code}</div>
                      </div>
                    }))
                  }
                  {//执行两遍，实现无缝滚动
                    (active === 1) &&
                    (monitorData.map((item,index)=>{
                      return <div className="row" key={index}>
                        <div className="col">{item.tiem}</div>
                        <div className="col">{item.address}</div>
                        <div className="col">{item.code}</div>
                      </div>
                    })) ||
                    (abnormalData.map((item,index)=>{
                      return <div className="row" key={index}>
                        <div className="col">{item.tiem}</div>
                        <div className="col">{item.address}</div>
                        <div className="col">{item.code}</div>
                      </div>
                    }))
                  }

                </div>
              </div>
            </div>
          </div>
            {/* 点位分布统计 */}
          <div className="point  panel">
            <div className='hed'>点位分布统计</div>
            <div className="content">
              {/* 饼图 */}
              <div id='pointCharts'></div>
              <div>
                <div>
                  <p>320,11</p>
                  <p>点位总数</p>
                </div>
                <div>
                  <p>418</p>
                  <p>点位总数</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* 中间 */}
        <div className='column'>
          <div className='mapStatistics'>
            <div className='mapHed'>设备数据统计</div>
            <div className='eChartsMap'>

            </div>
          </div>
          <div className='nation  panel'>
          <div className='hed'>全国用户总量统计</div>
            <div className="content">
              {/* 柱形图表 */}
              <div id='barCharts'></div>
              <div>
                <div>
                  <p>120,899</p>
                  <p>用户总量</p>
                </div>
                <div>
                  <p>248</p>
                  <p>本月新增</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右侧 */}
        <div className='column'>
          
        </div>
      </div>
    </div>
  </div>
}