import { message } from "antd";
import axios from "axios";

import {getToken, getUsername} from './cookies';
//第一步创建实例
const service = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  //第二步请求拦截(请求头)
  service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 后台告诉传Token, Username变量
    config.headers['Token']=getToken()
    config.headers['Username']=getUsername()
    // console.log(process.env. NODE_ENV )
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

 //第三步响应拦截
 service.interceptors.response.use(function (response) {//http状态码为200
    // 对响应数据做点什么
    let data=response.data
    // console.log(data)
    if(data.resCode!==0){//resCode不成功,全局的错误拦截      
      message.info(data.message)
      //可以针对某些特定的resCode进行业务处理
      if(data.resCode===1023){
        alert(111)
      }
      return  Promise.reject(response)
      
    } else{//resCode成功
      return response;
    }
   
  }, function (error) {//http状态码不为200
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service;
 
