import React, {Component, Fragment} from 'react';
import {Button, message} from "antd";
import { GetCode} from '../../api/account';
import {validate_email} from '../../utils/validate';

//定时器
let timer=null
class Code extends Component{
    constructor(props){
        super(props)
        this.state={
            username: "",
            buttonText: "获取验证码",
            buttonLoading: false,
            buttonDisabled: false,
            module: props.module
          
        }
    }
    componentWillReceiveProps({username}){
        this.setState({
            username:username
        })
    }
    componentWillUnmount(){
        clearInterval(timer)
    }
    //倒计时
    countDown=()=>{
       
        let sec=60
        this.setState({
            codeButtonLoad:false,
            buttonDisabled:true,
            buttonText:`${sec}s`
        })
        //setInterval /clearInterval
        //setTimeout / clearTimeout
        timer=setInterval(()=>{
            sec--;
            if(sec<=0){
               
                this.setState({
                    buttonDisabled:false,
                    buttonText:"重新获取"                   

                })
               
                return false
            }
            this.setState({
                buttonText:`${sec}s`
            })
        }, 1000)

    }
    //获取验证码
    getCode=()=>{
      
      const username=this.state.username
       
   
        if(!username){
            message.error('用户名不能为空',1)
            return false
        }
        
        if(!validate_email(username)){
            message.error('邮箱格式不正确',1)
            return false
        }
        this.setState({
            buttonLoading:true,
            buttonText:'发送中'
        })
       
        const requestData={
            username: username ,
            module: this.state.module
        }
        // alert(...requestData)
        GetCode(requestData).then(response=>{
            message.success(response.data.message,1)
            this.countDown()
        }).catch(error=>{
            this.setState({
                buttonLoading:false,
                buttonText:'重新获取'
            })
        })
       
    }
    
    
    render(){
        const {buttonDisabled, buttonLoad }=this.state
        return(
            <Fragment>
                 <Button type="danger"
                    block
                    disabled={buttonDisabled} 
                    loading={buttonLoad} 
                    onClick={this.getCode}>{this.state.buttonText}
                  </Button>
            </Fragment>

        )
    }
}
export default Code;