import React, {Component, Fragment} from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import {validate_pass} from '../../utils/validate';
//加密
import Cryptojs from "crypto-js";
import './Index.scss';
import Code from '../../components/code/index';
//导入API
import {Register} from '../../api/account';



class RegisterForm extends Component {
    constructor(props){
      super(props)
      this.state={
        username: " ",
        module:"register",
        password: " ",
        code: " "

  
      }
     
    }
    toggleForm=()=>{
      this.props.switchForm('login')      
  }
   //input输入
   inputChange_username=(e)=>{
    let value=e.currentTarget.value
    this.setState({           
        username: value
     })
    }
    inputChange_password=(e)=>{
        let value=e.currentTarget.value
        this.setState({           
            password: value
         })
    }
    inputChange_code=(e)=>{
        let value=e.currentTarget.value
        this.setState({           
            code: value
         })
    }
    onFinish = (values) => {
        const registerData={
            username: this.state.username,
            password: Cryptojs.MD5(this.state.password).toString(),
            code: this.state.code
        }
        
       
        Register(registerData).then(response=>{
            message.success(response.data.message)
            console.log(response)
            if(response.data.resCode===0){
                this.toggleForm()
            }
        }).catch(error=>{
            console.log(error)
        })   
    };
    render(){
        const {username, module}=this.state
      return (
        <Fragment >
            <div className="login1">
                    <div>
                    <div className="login-header">
                        <h4 className="login2">账号注册</h4>
                        <span className="login3" onClick={this.toggleForm}>登录</span>
                    </div>
                    <div className="content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: '请输入邮箱!',
                            },
                            ]}
                        >
                            <Input
                             onChange={this.inputChange_username}
                             prefix={<UserOutlined 
                             className="site-form-item-icon" />} 
                             placeholder="用户邮箱" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            ({getFieldValue})=>({
                               
                                validator(role,value){
                                    let passwordValue=getFieldValue("password1")
                                    if(!validate_pass(value)){
                                        return Promise.reject("输入6-20的字母加数字")
                                    }
                                    if(passwordValue && value!==passwordValue){
                                        return Promise.reject("两次密码不一致")
                                    }
                                    return Promise.resolve()
                                }
                            }),
                            ]}
                        >
                            <Input 
                            // type='password'
                            onChange={this.inputChange_password}
                            prefix={<KeyOutlined 
                            className="site-form-item-icon" />} 
                            placeholder="password" />
                        </Form.Item>
                        <Form.Item
                            name="password1"
                            rules={[
                            {
                                required: true,
                                message: '请确认密码!',
                            },
                            ({getFieldValue})=>({
                                validator(role,value){
                                    if(value!==getFieldValue("password")){
                                        return Promise.reject("两次密码不一致")
                                    }
                                    return Promise.resolve()
                                }
                            }),
                            ]}
                        >
                            <Input 
                            // type='password'
                            prefix={<KeyOutlined 
                            className="site-form-item-icon" />} 
                            placeholder="请确认密码" />
                        </Form.Item>
                        <Form.Item
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: '验证码不能为空',
                                },
                                {
                                    len: 6,
                                    message: '请输入6位验证码',
                                },
                            ]}
                            
                        >
                        <Row gutter={13}>
                            <Col span={16}>
                            <Input 
                            onChange={this.inputChange_code}
                            prefix={<LockOutlined 
                            className="site-form-item-icon" />} 
                            placeholder="验证码" />
                            </Col>
                            <Col span={8}>
                                <Code username={username} module={module}/>

                                {/* <Button type="danger">获取验证码</Button> */}
                            </Col>
                        </Row>    
                        </Form.Item>
                       
                        
                        <Form.Item>
                            <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            block
                            >
                            注册
                            </Button>                           
                        </Form.Item>
                        </Form>                  
                    </div>
                    </div>
                </div>
                     
        </Fragment>
          );
    }
  }
  export default RegisterForm;