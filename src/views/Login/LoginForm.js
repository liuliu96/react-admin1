import React, {Component, Fragment} from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import './Index.scss';
import {validatePassword} from '../../utils/validate';

//导入API
import {Login} from '../../api/account'
const onFinish = (values) => {
    Login().then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })
    console.log('Received values of form: ', values);
  };
class LoginForm extends Component {
    constructor(props){
      super(props)
      this.state={
  
      }
     
    }
    toggleForm=()=>{
        this.props.switchForm('register')    
    }
    render(){
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
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: "email",
                                message: "邮箱格式不正确"
                            }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                            <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="password" />
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
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="验证码" />
                            </Col>
                            <Col span={8}>
                                <Button type="danger">获取验证码</Button>
                            </Col>
                        </Row>    
                        </Form.Item>
                        
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            block
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
  export default LoginForm;