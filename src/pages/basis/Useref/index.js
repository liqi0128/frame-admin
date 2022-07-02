import { useRef,useState } from 'react'
import {Button} from 'antd'
import Child from'./Child'

export default function Useref(){
  let childRef = useRef(null)
  let [count,setCount] = useState(0)
  const clickEvent = ()=>{
    if( childRef.current ){
      childRef.current.clickChild()
    }
  }
  const parentMethod = () =>{
    setCount(++count)
  }
  return <div>
    <h3>useRef</h3>
    <div>函数式组件：父组件中调用子组件的方法</div>
    <Button type="primary" onClick={clickEvent}>
              调用子组件的方法
            </Button>
    <Child ref={childRef}  parentMethod={parentMethod}/>
    <hr />
    <div>函数式组件：子组件中调用父组件的方法</div>
    <div>将函数传递给子组件</div>
    <div>父组件中的count值：{count}</div>
  </div>
}
