//自动化工程,第一个参数：目录；第二个参数：是否查找子目录；第三个参数：指定查找文件

//建立上下文关系
const files=require.context("../../../views/", true, / \.js$/);
//声明组件对象
const components=[];
//循环文件
files.keys().map(key=>{
  if(key.includes('./index')||key.includes('./login')){
    return false
  }
  const jsonObj={};
  const spiltFilesName=key.split('.')
  const path=`/index${spiltFilesName[1].toLowerCase()}`
  const component=files(key).default
  //写入对象
  jsonObj.path=path
  jsonObj.component=component
  components.push(jsonObj)
})
export default components;