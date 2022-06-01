import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // api base_url
})

const err = (error) => {

    return Promise.reject(error.response) // 返回接口返回的错误信息
};

const res = (response) =>{

    return response.data;
}

// response interceptor
service.interceptors.response.use(res, err)

export default service 
