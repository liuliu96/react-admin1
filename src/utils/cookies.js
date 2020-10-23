import cookies from 'react-cookies';
let token='adminToken';
let user='username';
//存储token
export function setToken(value){
    cookies.save(token, value)
}

//获取token
export function getToken(){
    return  cookies.load(token)
}
//存储用户名
export function setUsername(value){
   cookies.save(user, value)
}
//获取用户名
export function getUsername(){
 return  cookies.load(user)
}