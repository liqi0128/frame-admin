import { Tooltip,Drawer,Popover } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {useState,useEffect} from'react'
import { ConfigProvider } from 'antd';
import { SketchPicker } from 'react-color';

function Setting(){
  let themeList = [
    {label:'primary',color:'var(--ant-primary-color)',key:'primaryColor'},
    {label:'success',color:'var(--ant-success-color)',key:'successColor'},
    {label:'warning',color:'var(--ant-warning-color)',key:'warningColor'},
    {label:'error',color:'var(--ant-error-color)',key:'errorColor'},
    {label:'info',color:'var(--ant-info-color)',key:'infoColor'},
  ]
  let [visible,setVisible] = useState(false)
  let [themeColor,setThemeColor] = useState({
    primaryColor: '#1890ff',
    successColor:'#52c41a',
    errorColor:'#ff4d4f',
    warningColor:'#faad14',
    infoColor:'#1890ff',
  })
  
  useEffect(()=>{
    ConfigProvider.config({
      theme: themeColor
    });
  },[themeColor])
  const onColorChange = (key,color)=>{
    let obj ={}
    obj[key] = color
    setThemeColor({...themeColor,...obj})
  }

  return (
    <>
      <Tooltip placement="bottom" title={'系统设置'}>
        <SettingOutlined onClick={()=>setVisible(true)}/>
      </Tooltip>
      <Drawer title="系统设置" placement="right" onClose={()=>setVisible(false)} visible={visible}>
        <div className='system_setting_style'>
          <div>
            <p>风格</p>

          </div>
          <div>
            <p>主题颜色</p>
            <div>
              {
                themeList.map((item,index)=>{
                  return(
                    <Popover placement="bottom" key={index} content={
                      <SketchPicker
                        presetColors={['#1890ff', '#52c41a', '#ff4d4f','#faad14']}
                        color={themeColor[item.key]}
                        onChange={({ hex }) => {
                          onColorChange(item.key,hex);
                        }}
                      />
                    } trigger="click">
                      <div style={{backgroundColor:item.color}}>{item.label}</div>
                    </Popover>
                  );
                })
              }
            </div>
          </div>
            
        </div>
      </Drawer>
    </>
  );
}
export default Setting