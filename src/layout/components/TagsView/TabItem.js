import { memo } from'react'
import { CloseOutlined } from '@ant-design/icons'

function TabItem(props){
  const {tab,activeKey,onTabClick,onCloseTab,openContextMenu} = props
  const noKey='/subset0'
  const onContextMenu=(event)=>{
    event.preventDefault();
    if(tab.key!= noKey){
      openContextMenu(event,tab.key)
    }
  }
  const onClickClose=(event)=>{
    event.stopPropagation();
    onCloseTab(tab.key)
  }

  return (
      <div onContextMenu={onContextMenu} onClick={()=>onTabClick(tab.key)} className={['item_tab', tab.key == activeKey?'tab-active': ''].join(' ')} >
        <span>
          {tab.title}
        </span>
        {
          tab.key!=noKey&& <CloseOutlined onClick={onClickClose}/>
        }
      </div>
  );
}
export default memo(TabItem)