import {useEffect,Fragment} from'react'
import nprogress from "nprogress";
import "nprogress/nprogress.css";
function Nprogress(){
    useEffect( ()=> {
        nprogress.start();
        return ()=>{
            nprogress.done();
        }
    })
    return <Fragment></Fragment>
}

export default Nprogress;