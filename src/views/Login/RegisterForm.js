import React, {Component, Fragment} from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import './Index.scss';
const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

class RegisterForm extends Component {
    constructor(props){
      super(props)
      this.state={
  
      }
     
    }
    toggleForm=()=>{
      this.props.switchForm('login')      
  }
    render(){
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
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
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
                            ]}
                        >
                            <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>
                        <Form.Item
                            name="password1"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>
                        <Form.Item
                            name="code"
                            
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