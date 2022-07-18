import MyContext from "./context";
import React from 'react';
import GeneralC from './GeneralC'

function ConttextDemo(){
  return (
    <MyContext.Provider value={{ name: `context's value is string!` }}>
      <div>组件1使用：MyContext.Provider</div>
      <GeneralC></GeneralC>
    </MyContext.Provider>
  );
}


export default ConttextDemo
