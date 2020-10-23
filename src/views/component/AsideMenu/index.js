import React, {Component, Fragment} from 'react';
import '../aside.scss';
import { Menu } from 'antd';
import {Link, withRouter} from 'react-router-dom';
import Router from '../../../router/index';
import {  SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class AsideMenu extends Component{
    constructor(props){
        super(props)

        this.state={
            selectedKeys:[],
            openKeys: [],
           
            
        }
       
    }
    //生命周期，在这里多了一层接口请求，并过滤路由
    componentDidMount(){
        const pathname=this.props.location.pathname
        const menuKey=pathname.split('/').slice(0,3).join('/')
        const menuHigh={
            selectedKeys:pathname,
            openKeys: menuKey
        }
       this.selectMenuHigh(menuHigh)
        // console.log(pathname.split('/'))//拆分
        // console.log(pathname.split('/').slice(0,3))//截取
        // console.log(pathname.split('/').slice(0,3).join('/'))//将数组转换为字符串
    }
    // componentWillReceiveProps({collapsed}){
    //     this.setState({
    //         collapsed:collapsed
    //     })
    // }
    //选择菜单
    selectMenu=({key, keyPath })=>{
        const menuHigh={
            selectedKeys:key,
            openKeys: keyPath[keyPath.length-1]
        }
        this.selectMenuHigh(menuHigh)
    }
    //菜单高光
    selectMenuHigh=(params)=>{
        this.setState({
            selectedKeys:[params.selectedKeys],
            openKeys: [params.openKeys]
        })

    }
    //打开菜单
    openMenu=(openKeys)=>{
        this.setState({
            openKeys: [openKeys[openKeys.length-1]]            
        })

    }

    //子级菜单处理
    renderSubMenu=({title, key, child})=>{
        return (
            <SubMenu
                icon={<SettingOutlined />}
                key={key}
                title={title}
                >
                  {
                      child && child.map(item=>{
                        return  item.child && item.child.length>0 
                          ? this.renderSubMenu(item)
                          : this.renderMenu(item)                          
                      })
                  } 
            </SubMenu>
        )

    }
    //无子级菜单处理
    renderMenu=(data)=>{
    return  <Menu.Item 
            key={data.key}>
                <Link to={data.key}>
                {data.title}
                </Link>
               
            </Menu.Item>

    }
    
    render(){
        const {selectedKeys, openKeys}=this.state;
        return (
            <Fragment >              
                <div className='logo'>
                   <span>LOGO</span>
               </div>       
               <div className="aside">
               <Menu
                    className='aside-menu'
                    onClick={this.selectMenu}
                    onOpenChange={this.openMenu}
                    theme="dark"                   
                    style={{
                        height:'100%',
                        borderRight: 0
                    }}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    mode="inline"
                    
                >

                    {
                        Router && Router.map(FirstItem=>{
                            return FirstItem.child && FirstItem.child.length>0 
                            ? this.renderSubMenu(FirstItem)
                            : this.renderMenu(FirstItem)
                        })
                    }
                   
                 </Menu>
               </div>
            </Fragment>

        )
    }

}
export default withRouter(AsideMenu);