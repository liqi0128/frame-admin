import {useEffect,Fragment} from'react'
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const style={
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
}
function Nprogress(props){
    useEffect( ()=> {
        nprogress.start();
        return ()=>{
            nprogress.done();
        }
    })
    return <div style={style}>
        {
            props.children
        }
    </div>
}

export default Nprogress;