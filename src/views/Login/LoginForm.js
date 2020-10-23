import React, {Component, Fragment} from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, KeyOutlined,  } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
//样式
import './Index.scss';
//验证
import {validatePassword,validate_email} from '../../utils/validate';
//组件
import Code from '../../components/code/index';
//方法
import {setToken, setUsername} from '../../utils/cookies';
//导入API
import {Login} from '../../api/account';
//加密
import Cryptojs from "crypto-js";

class LoginForm extends Component {
    constructor(props){
      super(props)
      this.state={
          username:'',
          module: "login",
          loading: false    
  
      }
     
    }
    toggleForm=()=>{
        this.props.switchForm('register')    
    }
     //登录
    onFinish = (values) => {
        const loginData={
            username: this.state.username,
            password: Cryptojs.MD5(this.state.password).toString(),
            code: this.state.code
        }
        this.setState({
            loading: true
        })
    Login(loginData).then(response=>{
        console.log(response)
        this.setState({
            loading: false
        })
        
        const data=response.data.data
        //存储token
        setToken(data.token)
        setUsername(data.username)
      
        this.props.history.push('index')
    }).catch(error=>{
        console.log(error)
        this.setState({
            loading: false
        })
    })   
  };
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
  
    //input输入
    inputChange=(e)=>{
        let value=e.currentTarget.value
        this.setState({           
            username: value
        })
          }
    render(){
        const {username, module, loading}=this.state
        const _this=this
      return (
        <Fragment >
            <div className="login1">
                    <div>
                    <div className="login-header">
                        <h4 className="login2">登录</h4>
                        <span className="login3" onClick={this.toggleForm}>账号注册</span>
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
                                message: 'Please input your email!',
                            },
                            // {
                            //     type: "email",
                            //     message: "邮箱格式不正确"
                            // }
                             ({getFieldValue}) => ({
                               
                               
                                validator(rule, value) {
                                   
                                  if (validate_email(value)) {
                                    _this.setState({
                                          codeButtonDisabled:false
                                      })
                                    return Promise.resolve("验证通过");                                    
                                    
                                  }
                                  return Promise.reject('邮箱格式不正确');                  
                                  
                                },
                              }),
                            ]}
                        >
                            <Input  onChange={this.inputChange}
                            value={username} 
                                                    
                            prefix={<UserOutlined 
                            className="site-form-item-icon" />} 
                            placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                           
                            
                            // ({getFieldValue}) => ({
                               
                               
                            //     validator(rule, value) {
                                   
                            //       if (value.length<6) {
                            //         return Promise.reject('少于6位');
                                    
                            //       }
                            //       return Promise.resolve("少于6位");                  
                                  
                            //     },
                            //   }),
                            {
                                pattern:validatePassword,
                                message:"输入6-20的字母加数字"
                            },
                            // {
                            //     min: 6,
                            //     message: "不能少于6位"
                            // },
                            ]}
                        >
                            <Input 
                            onChange={this.inputChange_password}
                             type='password'
                            prefix={<KeyOutlined 
                            className="site-form-item-icon" />} 
                            placeholder="password" />
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
                            </Col >
                            <Col span={8}>
                                <Code username={this.state.username} module={module}/>
                            </Col>
                        </Row>    
                        </Form.Item>
                        
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                           
                        </Form.Item>

                        <Form.Item>
                            <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            block
                            loading={loading}
                            >
                            登录
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
  export default withRouter(LoginForm) ;