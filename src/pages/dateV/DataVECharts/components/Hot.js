import { useState ,useEffect} from'react'
import {
  hotData
} from'../data'
import {
  TrophyOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';

let hotTimer = null //热榜
function Hot(){
  const [hotAtion,setHotAtion] = useState(0)
  const [hotChild,setHotChild] = useState(hotData[0].children)
  //鼠标移入各省
  const onMouseEnterHot = (index) =>{
    setHotAtion(index)
    setHotChild(hotData[index].children || [])
  }
  //鼠标移入
  const onMouseEnterProvinceHot=()=>{
    clearInterval(hotTimer)
    hotTimer = null
  }
  //鼠标移出
  const onMouseLeaveProvinceHot=()=>{
    autoHot()
  }
  //自动切换热榜
  function autoHot(){
    if(hotTimer === null){
      hotTimer = setInterval(()=>{
        setHotAtion(hotAtion=>{
          let index = hotAtion + 1
          if(index === hotData.length){
            setHotChild(hotData[0].children)
            return 0
          }else{
            setHotChild(hotData[index].children)
            return index
          }
        })
      },3000)
    }
  }
  useEffect(()=>{
    autoHot()
    return ()=>{

    }
  },[])
  return <div className='hotList  panel'>
    <div className='nationHot'>
      <div className='nationHotHed'>
        全国热榜
      </div>
      <div className='nationContent'>
          <div>
          <TrophyOutlined />
          可爱多
          </div>
          <div>
          <TrophyOutlined />
          可爱多
          </div>
          <div>
          <TrophyOutlined />
          可爱多
          </div>
      </div>
    </div>
    <div className='province' onMouseEnter={()=>onMouseEnterProvinceHot()} onMouseLeave={()=>onMouseLeaveProvinceHot()}>
      <div className="provinceHed">
        <div>各省热榜</div>
        <div>#近30日#</div>
      </div>
      <div className="provinceContent">
        <div className='left'>
            {
              hotData.map((item,index)=>{
                return <div key={index} className={(hotAtion === index) && ('hotAtion') || ('')} 
                onMouseEnter={()=>onMouseEnterHot(index)}>
                  <div>{item.name}</div>
                  <div>{item.num}{(item.num > 23) && <ArrowUpOutlined style={{color: '#00FF00'}}/> || <ArrowDownOutlined style={{color: '#FF0000'}}/>}</div>
                </div>
              })
            }
        </div>
        <div className='right'>
          {
            hotChild.map((item,index)=>{
              return <div key={index}>
                <div>{item.name}</div>
                <div>{item.num}{(item.num > 23) && <ArrowUpOutlined style={{color: '#00FF00'}}/> || <ArrowDownOutlined style={{color: '#FF0000'}}/>}</div>
              </div>
            })
          }
          
        </div>
      </div>
    </div>
  </div>
}
export default Hot