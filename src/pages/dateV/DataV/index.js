import './css.less'
import { useNavigate } from "react-router-dom";

export default function DataV(){
  const navigate = useNavigate()
  const clickExemplary1 = ()=>{
    navigate('/dataVECharts')
  }
  return <div className='dataV'>
    <h3>大屏可视化</h3>
    <ul>
      <li onClick={clickExemplary1}>示例1</li>
    </ul>
  </div>
}