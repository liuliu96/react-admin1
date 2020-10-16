import React, {Component, Fragment} from 'react';
import './Index.scss';
import LoginForm from './LoginForm';
import RegisterForm from "./RegisterForm"
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            loginType: "login"
        }
    }
    switchForm=(value)=>{
        this.setState({
            loginType: value
        }        
        )
       
    }
    render(){
        return(
            <Fragment>
                {this.state.loginType==="login"
                ?<LoginForm switchForm={this.switchForm}/>
                : <RegisterForm switchForm={this.switchForm}/>}             
         
            </Fragment>

        )
    }
}
export default Login;