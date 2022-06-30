import { useState,forwardRef,useImperativeHandle } from'react'
import {Button} from 'antd'
function Child(props,ref){
  let [count,setCount] = useState(0)
  const clickChild = ()=>{
    setCount(++count)
  }
  const parentMethod = ()=>{
    props.parentMethod()
  }
  useImperativeHandle(ref,()=>({
    clickChild
  }))
  return <div>
    <hr />
    <div>useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值</div>
    <div>useImperativeHandle 应当与 forwardRef 一起使用</div>
    <div>子组件中的count值：{count}</div>
    <Button type="primary" onClick={parentMethod}>
            子组件中调用父组件的方法
            </Button>

  </div>
}

export default forwardRef(Child)