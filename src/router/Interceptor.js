import { connect } from "react-redux";
import { useLocation, Navigate,matchPath } from 'react-router-dom'
import { addTag, setSelectKey } from '../store/actions';

// 组件相当于一个拦截器，是否返回被拦截的组件
function Interceptor({meta,children,addTag,setSelectKey}) {
	const location = useLocation()
    if(matchPath(meta.pattern,location.pathname)){
        console.log(location);
      //无权限跳转
      // return <Navigate to="/" replace={true}/>
    
      //判断是否添加快捷标签isFastTag
      if(location.state && location.state.isFastTag){
        Promise.resolve({title:location.state.title,key:location.pathname}).then(res=>{
          addTag(res)
        })
      }
      Promise.resolve(location.pathname).then(res=>{
        setSelectKey(res)
      })
      
    }
  
	return children;
}

const mapDispatchToProps=(dispatch)=>{
  return{
      addTag:(tag)=>dispatch(addTag(tag)),
      setSelectKey:(key)=>dispatch(setSelectKey(key))
  }
}
 export default connect(null,mapDispatchToProps)(Interceptor)