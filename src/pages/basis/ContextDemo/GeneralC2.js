import React, { useContext } from "react";
import MyContext from "./context";
function GeneralC2(){
  const context = useContext(MyContext);
  return (
    <div>
      最底层组件
      {JSON.stringify(context)}
      <div>

      </div>
    </div>
  );
}

export default GeneralC2