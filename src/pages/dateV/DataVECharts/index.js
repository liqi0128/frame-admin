import './css.less'
import {monitorData,abnormalData,pointOption,barOption,salesOption,salesData} from'./data'
import { useState ,useEffect} from'react'
import * as echarts from 'echarts';

let salesCharts = null //销售额统计图表
let salesTimer = null
export default function DataVECharts(){
  const [active ,setActive] = useState(1)
  const [orderAction,setOrderAction] = useState(1)
  const [salesAction,setSalesAction] = useState(0)

  let salesArr=['year','season','month','week']
  
  const intSalesCharts = (val) =>{
    salesOption.series[0].data = salesData[salesArr[val]].expected
    salesOption.series[1].data = salesData[salesArr[val]].actual
    salesCharts.setOption(salesOption)
  }
  //销售额统计切换
  const switchSales = (val)=>{
    setSalesAction(val)
    intSalesCharts(val)
  }
  const onMouseEnterSales = ()=>{
    clearInterval(salesTimer)
    salesTimer = null
  }
  const onMouseLeaveSales = ()=>{
    autoSwitch()
  }
  function autoSwitch(){
    if(salesTimer === null){
      salesTimer = setInterval(()=>{
        setSalesAction(salesAction=>{
          let index = salesAction + 1
          if(index == 4){
            intSalesCharts(0)
            return 0
          }else{
            intSalesCharts(index)
            return index
          }
        })
      },3000)
    }
  }
  useEffect(()=>{
    let myChart = echarts.init(document.getElementById('pointCharts'));
    myChart.setOption(pointOption);
    let barCharts = echarts.init(document.getElementById('barCharts'))
    barCharts.setOption(barOption)

    salesCharts = echarts.init(document.getElementById('salesCharts'))
    intSalesCharts(0)
    autoSwitch()//销售额统计3秒切换
    window.addEventListener('resize',()=>{
      myChart.resize()
      barCharts.resize()
      salesCharts.resize()
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
          <div className='orderQuantity  panel'>
            <ul>
              <li className={(orderAction === 1) && ('orderAction') || ''} onClick={()=>setOrderAction(1)}>365天</li>
              <li className={(orderAction === 2) && ('orderAction') || ''} onClick={()=>setOrderAction(2)}>90天</li>
              <li className={(orderAction === 3) && ('orderAction') || ''} onClick={()=>setOrderAction(3)}>30天</li>
              <li className={(orderAction === 4) && ('orderAction') || ''} onClick={()=>setOrderAction(4)}>24小时</li>
            </ul>
            <div>
              <div>
                <div>1,987</div>
                <div>订单量</div>
              </div>
              <div>
                <div>3834</div>
                <div>销售额(万元)</div>
              </div>
            </div>
          </div>
          {/* 销售额统计 */}
          <div className='sales  panel' onMouseEnter={()=>onMouseEnterSales()} onMouseLeave={()=>onMouseLeaveSales()}>
            <div className='hed'>
              <div>销售额统计</div>
              <ul>
                <li className={(salesAction === 0) && ('salesAction') || ''} onClick={()=>switchSales(0)}>年</li>
                <li className={(salesAction === 1) && ('salesAction') || ''} onClick={()=>switchSales(1)}>季</li>
                <li className={(salesAction === 2) && ('salesAction') || ''} onClick={()=>switchSales(2)}>月</li>
                <li className={(salesAction === 3) && ('salesAction') || ''} onClick={()=>switchSales(3)}>周</li>
              </ul>
            </div>
            <div id='salesCharts'>
            </div>
          </div>
          <div className='channel-schedule'>
              <div className='panel'></div>
              <div className='panel'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
}