import { useEffect } from'react'
import * as echarts from 'echarts';
import {optionMap} from'../data'
import '@/utils/china.js'
function EChartsMap(){
  useEffect(()=>{
    let eChartsMap = echarts.init(document.getElementById('eChartsMap'))
    eChartsMap.setOption(optionMap)
    window.addEventListener('resize',()=>{
      eChartsMap.resize()
    })
  },[])
  return <div className='eChartsMap' id='eChartsMap'>

  </div>
}
export default EChartsMap