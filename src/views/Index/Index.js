import React, {Component, Fragment} from 'react';
//antd
import {Layout} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'

//导入组件
import LayoutAside from '../component/LayoutAside';
import ContainerMain from '../component/containerMain/index';
//引入样式
import "./layout.scss";
const {Sider, Header, Content}=Layout;
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            collapsed: '',            
        }
    }
    componentDidMount(){        
        const sessionStorageCollapsed=JSON.parse(sessionStorage.getItem('collapsed'))
       console.log(sessionStorageCollapsed)
        this.setState({
            collapsed: sessionStorageCollapsed
        })
    }
    collapsedChange=()=>{
        let collapsed=!this.state.collapsed
        this.setState({
            collapsed: collapsed,
            
        })
        sessionStorage.setItem("collapsed",collapsed)
        // console.log()
    }
    render(){
        return (
            <Fragment>
                <Layout className='layout-wrap'>
               
                    <Sider 
                    collapsed={this.state.collapsed} 
                    width="250px">
                        <LayoutAside/>
                    </Sider>
                <Layout className='layout-wrap'>
                    <Header className="layout-header">
                        <div 
                       
                       
                        >
                        {
                            !this.state.collapsed
                            ? <MenuFoldOutlined                             
                            className="collapsed"
                            onClick={this.collapsedChange}
                            />
                            : <MenuUnfoldOutlined  
                            className="collapsed"
                            onClick={this.collapsedChange} />
                        }
                        </div>
                    </Header>
                    <Content className="layout-main">
                        <ContainerMain/>
                    </Content>
                </Layout>
                </Layout>
                
            </Fragment>

        )
    }

}
export default Index;