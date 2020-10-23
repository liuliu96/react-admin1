import React, {Component, Fragment} from 'react';
//antd
import {Form, Button, Input, Table, Pagination} from 'antd';
import { UserOutlined} from '@ant-design/icons';
//获取部门列表数据API
import {GetDepartmentList} from '../../api/account';
//部门列表标题
const columns=[
  {
    title: '部门名称',
    dataIndex: 'name',
    key: 'name'
  }, 
  {
    title: '禁启用',
    dataIndex: 'status',
    key: 'status'
  }, 
  {
    title: '人员数量',
    dataIndex: 'number',
    key: 'number'
  }, 
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width:215
  }, 
]
//部门列表数据
// const dataSource=[]

class departmentList extends Component {
  constructor(props){
    super(props)
    this.state={
      pageNumber: 1,
      pageSize: 10,
      dataSource:[],
      keyWord: '',
      total: ''
    }
   
  }
  componentDidMount(){
    this.loadData()
  }
  //获取部门列表数据
  loadData(){
    let {pageNumber, pageSize, keyWord}=this.state
    let responseData={
      pageNumber: pageNumber,
      pageSize: pageSize
    }
    if(keyWord){
      responseData.name=keyWord
    }
    GetDepartmentList(responseData).then(response=>{
      // console.log(response)
      let data=response.data.data.data
      console.log(data)
      if(data){
        this.setState({
          dataSource: data,
          total: data.length
        })
      }
      
    }).catch(error=>{
      return error
    })
  }
  
  //搜索
  onFinish=(value)=>{    
    this.setState({
      keyWord: value.name,
      pageNumber: 1,
      pageSize: 10,
     
    })
    // console.log(this.state.keyWord)
    this.loadData()

  }
  render(){
    return (
        <Fragment >
          <Form
          layout='inline'
          onFinish={this.onFinish}
          >
            <Form.Item
              label='部门名称'
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="请输入部门名称" />
            </Form.Item>
            <Form.Item>
              <Button
               type="primary"
               htmlType="submit"
              >
                搜索
              </Button>
            </Form.Item>
          </Form>
          <Table
          columns={columns}
          pagination='false'
          dataSource={this.state.dataSource}
          rowKey='id'
          >
          </Table>
          <Pagination 
          defaultCurrent={1}
          pageSize={10}
          total={this.state.total} />         
        </Fragment>
    );
  }
}
export default departmentList;