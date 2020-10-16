import service from "../utils/request";
//登录接口
export function Login(data){
   return service.request({
        url:"/login/",
        method:"post",
        data:data,//请求类型为post
        // params:data//请求类型为get
       })
};