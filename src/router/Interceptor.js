import { connect } from "react-redux";
import { useLocation, Navigate,matchPath } from 'react-router-dom'
import { addTag, setSelectKey } from '../store/actions';
import {storageGet} from'@/utils/storage.js'
// 组件相当于一个拦截器，是否返回被拦截的组件
function Interceptor({meta,children,addTag,setSelectKey}) {
	const location = useLocation()
    if(matchPath(meta.pattern,location.pathname)){
        console.log(location);
      //无权限跳转
      let isLogin = /^\/blog\//.test(location.pathname)
      console.log(isLogin);
      if(isLogin){
        let token = storageGet('token')
        if(!token){
          return <Navigate to="/login" replace={true}/>
        }
      }
      // return <Navigate to="/" replace={true}/>
      //判断是否添加快捷标签isFastTag   暂未想到更好的方法
      // if(location.state && location.state.isFastTag){
      //   Promise.resolve({title:location.state.title,key:location.pathname}).then(res=>{
          
      //     addTag(res)
      //   })
      // }
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