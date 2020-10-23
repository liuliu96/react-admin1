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
//获取验证码
export function GetCode(data){
   return service.request({
        url:"/getSms/",
        method:"post",
        data:data,//请求类型为post
        // params:data//请求类型为get
       })
};
//注册
export function Register(data){
   return service.request({
        url:"/register/",
        method:"post",
        data:data,//请求类型为post
        // params:data//请求类型为get
       })
};
//部门新增
export function DepartmentAddAPI(data){
   return service.request({
        url:"/department/add/",
        method:"post",
        data:data,//请求类型为post
        // params:data//请求类型为get
       })
};
//部门列表
export function GetDepartmentList(data){
   return service.request({
        url:"/department/list/",
        method:"post",
        data:data,//请求类型为post
        // params:data//请求类型为get
       })
};