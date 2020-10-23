import React, {Component, Fragment} from 'react';
//antd
import {
  Form, 
  Button, 
  Input, 
  InputNumber,
  message ,
  Radio} from 'antd';
//API
import {DepartmentAddAPI} from '../../api/account';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 4,
  },
};

class departmentAdd extends Component {
  constructor(props){
    super(props)
    this.state={
      loading: false
    }
   
  }
  
    onFinish = (values) => {
      this.setState({
        loading: true
      })
      DepartmentAddAPI(values).then(response=>{
        message.info(response.data.message)
        this.setState({
          loading: false
        })
        //重置表单
        this.refs.form.resetFields()
      }).catch(erroe=>{
        this.setState({
          loading: false
        })
      })
    };
  
   onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   }
  render(){
    return (
        <Fragment >
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
              status:true,
              number:2

            }}
            ref='form'
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="部门名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '部门不能为空',
                },
              ]}
             
            >
              <Input />             
            </Form.Item>
            <Form.Item
              label="人员数量"
              name="number"
              rules={[
                {
                  required: true,
                  message: '数量不能为0',
                },
              ]}
             
            >
              <InputNumber
              
               min={0} 
               max={100} />             
            </Form.Item>  
            <Form.Item
              label="禁启用"
              name="status"
              
            >
               <Radio.Group  >
                  <Radio value={false}>禁用</Radio>
                  <Radio value={true}>启用</Radio>                  
                </Radio.Group>             
            </Form.Item>   
            <Form.Item
              label="描述"
              name="content"
             
            >
              <Input.TextArea />             
            </Form.Item>        
         

            <Form.Item {...tailLayout}>
              <Button 
              type="primary" 
              loading={this.state.loading}
              htmlType="submit">
               确定
              </Button>
            </Form.Item>
          </Form>         
        </Fragment>
    );
  }
}
export default departmentAdd;