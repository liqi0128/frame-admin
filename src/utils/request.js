import axios from 'axios'
import { message  } from 'antd';
import {storageClear} from'@/utils/storage.js'
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // api base_url
})

const err = (error) => {

  switch (error.response.status) {
    case 401:
      message.error(error.response.data.msg)
      storageClear()//清楚所有
      window.location.href = '#/login'
      break;
  
    default:
      break;
  }
    return Promise.reject(error.response) // 返回接口返回的错误信息
};

const res = (response) =>{
    if(response.data.code != 0){
      message.error(response.data.msg)
    }
    return response.data;
}

// response interceptor
service.interceptors.response.use(res, err)

export default service 
