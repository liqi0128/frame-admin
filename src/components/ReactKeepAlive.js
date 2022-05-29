/**
 * 缓存组件
 */
import { connect } from 'react-redux'
// import KeepAlive from 'react-activation'
import {useLocation} from'react-router-dom'
/**
 <KeepAlive when={taglist.indexOf(pathname)>=0}>
            {props.children}
        </KeepAlive>
 */
function ReactKeepAlive(props){
    const {taglist} = props
    console.log(taglist);

    console.log(useLocation());
    const {pathname} = useLocation()
    console.log(taglist.indexOf(pathname)>=0);
    
    return(
            props.children
    );
}
const mapStateToProps=(state)=>{
    return{
        taglist:state.tagsView.taglist
    }
}
export default connect(mapStateToProps)(ReactKeepAlive)