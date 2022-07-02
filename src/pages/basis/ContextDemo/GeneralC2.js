import React, { useContext } from "react";
// import MyContext from "./context";
import {MyContext} from './index'
function GeneralC2(){
  const context = useContext(MyContext);
  return (
    <div>
      最底层组件
      {JSON.stringify(context)}
    </div>
  );
}

export default GeneralC2