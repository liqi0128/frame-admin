// import MyContext from "./context";
import React from 'react';
import GeneralC from './GeneralC'
export const MyContext = React.createContext("默认名称");

function ConttextDemo(){
  return (
    <MyContext.Provider value={{ name: `context's value is string!` }}>
      <GeneralC></GeneralC>
    </MyContext.Provider>
  );
}


export default ConttextDemo
