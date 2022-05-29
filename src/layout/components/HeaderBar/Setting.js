import { Tooltip,Drawer } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {useState} from'react'

function Setting(){
  
  let [visible,setVisible] = useState(false)

  return (
    <>
      <Tooltip placement="bottom" title={'系统设置'}>
        <SettingOutlined onClick={()=>setVisible(true)}/>
      </Tooltip>
      <Drawer title="系统设置" placement="right" onClose={()=>setVisible(false)} visible={visible}>
        
      </Drawer>
    </>
  );
}
export default Setting