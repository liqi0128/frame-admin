import style from './index.module.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message  } from 'antd';
import {useRef,useState} from 'react';
import { adminLoginApi } from'@/api/system.js'
import md5 from 'js-md5';
import {storageSet} from'@/utils/storage.js'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const accountRef = useRef(null)
  const passwordRef = useRef(null)
  const [pawAnimation,setPawAnimation] = useState(false)
  const [accountAnimation,setAccountAnimation] = useState(false)
  const [loadings,setLoadings] = useState(false)
  //登录
  const onSubmit = ()=>{
    let account = accountRef.current.input.value
    let password = passwordRef.current.input.value
    if(account == '' && password == ''){
      setPawAnimation(true)
      setAccountAnimation(true)
      return;
    }else if(account == ''){
      return setAccountAnimation(true)
    }else if(password == ''){
      return setPawAnimation(true)
    }
    setLoadings(true)
    adminLoginApi({
      account:account,
      password:md5(password)
    }).then(res=>{
      setLoadings(false)
      if(res.code == 0){
        storageSet('userInfo',res.data)
        storageSet('token',res.data.token)
        navigate("/", { replace: true });
      }
    })
    
  }
  //动画执行完成
  const animationEnd = () =>{
    setPawAnimation(false)
    setAccountAnimation(false)
  }

  return <div className={style.login}>
    <div className={style.bag}>

      <div className={style.loginMin}>
        <div className={style.thumbur}>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            onAnimationEnd={()=>animationEnd()}
          >
            <Input 
              className={`${accountAnimation && style.shakeHorizontal || ''}`}
              ref={accountRef} 
              id="account" 
              prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
          </Form.Item>
          <Form.Item
            className={style.fromMarginBottom}
            name="password"
            onAnimationEnd={()=>animationEnd()}
          >
            <Input
              className={`${pawAnimation && style.shakeHorizontal || ''}`}
              ref={passwordRef}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item className={style.fromMarginBottom}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item className={style.loginFormButton}>
            <Button loading={loadings} type="primary" shape="round" onClick={()=>onSubmit()} >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
}
export default Login