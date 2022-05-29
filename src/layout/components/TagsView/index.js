import { useCallback,memo,useState,useRef,useEffect } from'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setSelectKey, deleteTag,emptyTaglist,closeOtherTags } from '../../../store/actions/index';
import TabItem from './TabItem';
function TagsView(props) {
  const { taglist, selectKey, setSelectKey, deleteTag,emptyTaglist,closeOtherTags } = props
  let [active,setActive] = useState(null)
  let [location,setLocation] = useState({left:0,top:0})
  let [menuVisible,setMenuVisible] =useState(false)
  const tagListContainer = useRef(null);
  const  contextMenuContainer = useRef(null);
  const navigate = useNavigate()
  useEffect(()=>{
    document.body.addEventListener("click", handleClickOutside);
    return ()=>{
      document.body.removeEventListener("click", handleClickOutside);
    }
  },[])
  //切换
  const onTabClick = useCallback((targetKey) => {
    setSelectKey(targetKey)
    navigate(targetKey)
  },[]) 
  //关闭标签Close label
  const onCloseTab = (targetKey) => {
    deleteTag(targetKey)
    if(selectKey === targetKey){
      let index = taglist.findIndex(item => item.key == targetKey)
      let menu = taglist[index - 1]
      navigate(menu.key)
    }
  }
  //右击触发事件
  function openContextMenu(event,key) {
    setActive(key)
    const menuMinWidth = 105;
    const clickX = event.clientX;
    const clickY = event.clientY; //事件发生时鼠标的Y坐标
    const clientWidth = tagListContainer.current.clientWidth; // container width
    const maxLeft = clientWidth - menuMinWidth; // left boundary
    // 当鼠标点击位置大于左侧边界时，说明鼠标点击的位置偏右，将菜单放在左边
    if (clickX > maxLeft) {
      setLocation({
        left: clickX - menuMinWidth + 15,
        top: clickY,
      });
    } else {
      // 反之，当鼠标点击的位置偏左，将菜单放在右边
      setLocation({
        left: clickX,
        top: clickY,
      });
    }
    setMenuVisible(true)
  }

  const handleClickOutside=(event)=>{
      setMenuVisible(false)
  };
  //关闭其他
  const onCloseOthers=(event)=>{
    event.stopPropagation()
    closeOtherTags(active)
    setMenuVisible(false)
    if(active !== selectKey){
      navigate(active)
    }
  }
  //关闭所有
  const onCloseAll =(event)=>{
    event.stopPropagation()
    emptyTaglist()
    setMenuVisible(false)
    let tagOne = taglist[0]
    navigate(tagOne.key)
  }
  return (
    <div className="layout_tags_view">
      <div className='tags_content' ref={tagListContainer}>
        {
          taglist.map((tab,index)=>(
            <TabItem 
              onTabClick={onTabClick} 
              onCloseTab={onCloseTab}
              openContextMenu={openContextMenu}
              key={index} tab={tab} 
              activeKey={selectKey}
              />
          ))
        }
      </div>
      {
        menuVisible&&(
          <ul
            className="contextmenu"
            style={{ left: `${location.left}px`, top: `${location.top}px` }}
            ref={contextMenuContainer}
          >
            <li onClick={onCloseOthers}>关闭其他</li>
            <li onClick={onCloseAll}>关闭所有</li>
          </ul>
        )
      }

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    taglist:state.tagsView.taglist,
    selectKey: state.tagsView.selectKey
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectKey: (key) => dispatch(setSelectKey(key)),
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    emptyTaglist:()=> dispatch(emptyTaglist()),
    closeOtherTags:(tag)=> dispatch(closeOtherTags(tag))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(TagsView))