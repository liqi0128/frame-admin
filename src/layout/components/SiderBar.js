import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'; 
import { setSelectKey } from '../../store/actions/index';
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
//处理数据
function createItem(items){
  if(!items || items.length === 0) return null
  return items.map(item=>{
    return getItem(item.label,item.key,item.icon,createItem(item.children))
  })
}
let obj =[
  {label:'组件0',key:'/subset0',icon:<PieChartOutlined />},
  {label:'组件1',key:'/subset1/123456',icon:<DesktopOutlined />},
  {label:'组件2',key:'/subset2',icon:<ContainerOutlined />},
  {label:'组件3',key:'/test',icon:<MailOutlined />},
  {label:'组件4',key:'/App',icon:<AppstoreOutlined />},
  {label:'context',key:'/context',icon:<AppstoreOutlined />},
  {label:'UseMemo',key:'/UseMemo',icon:<AppstoreOutlined />},
  {label:'UseCallback',key:'/UseCallback',icon:<AppstoreOutlined />},
  {label:'MapPage',key:'/MapPage',icon:<AppstoreOutlined />},
  {label:'Useref',key:'/Useref',icon:<AppstoreOutlined />},
]

const menus = createItem(obj)
//根据key获取menu
const getMenu = (menus, key) => {
	for (const data of menus) {
		if (data.key === key) return data
		if (data.children) {
			const res = getMenu(data.children, key)
			if (res) return res
		}
	}
	return null
}


function SiderBar({selectKey,setSelectKey}){
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  //men选中
  function onSelect(e){
    let menu = getMenu(menus,e.key)
    setSelectKey(e.key)
    navigate(e.key,{replace: false,state:{ isFastTag:true,title:menu.label}})
  }

  return(
    <div className='sider-style'>
      <Sider trigger={
        <div onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      } collapsible collapsed={collapsed}>
          <Menu
            selectedKeys={[selectKey]}
            defaultOpenKeys={['']}
            mode="inline"
            theme="dark"
            items={menus}
            onSelect={onSelect}
          />
      </Sider>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return{
        selectKey:state.tagsView.selectKey
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
      setSelectKey:(key)=>dispatch(setSelectKey(key))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SiderBar) 