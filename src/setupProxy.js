const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports=function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        target: process.env.REACT_APP_BASE_URL,//配置你要请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            [`^${process.env.REACT_APP_API}`]:""
            // "^/devapi":"",
        },
    }))
    
};
/*
1.匹配到devapi 开始做代理  http://www.web-jshtml.cn/api/react
2. /devapi/login/=>/login/
3. 替换之后的地址 http://www.web-jshtml.cn/api/react/login/
*/