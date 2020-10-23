import React from 'react';

import {Switch,  } from "react-router-dom";
//用户组件
import User from '../../user/UserList';
import UserAdd from '../../user/Add';
//部门组件
import departmentAdd from '../../department/departmentAdd';
import departmentList from '../../department/departmentList';
import PrivateRouter from "../../../components/private/index";
//自动化工程
import components from './components';
class ContainerMain extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
   
  }
  
  

  render(){
    return (
      <div className="test">
             
        
          <Switch>
          {/* {
            components.map(item=>{
              return <PrivateRouter exact component={item.component} path={item.path}/>
            }) 
          } */}


          <PrivateRouter exact component={User} path="/index/user/list"/>
          <PrivateRouter exact component={UserAdd} path="/index/user/add"/> 
          <PrivateRouter exact component={departmentList} path="/index/department/list"/>
          <PrivateRouter exact component={departmentAdd} path="/index/department/add"/>      
         
         
          </Switch>
        
      </div>
        );
  }
}
export default ContainerMain;
