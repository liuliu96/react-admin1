import React, {Component, Fragment} from 'react';
import AsideMenu from './AsideMenu/index';

class LayoutAside extends Component{
    constructor(props){
        super(props)

        this.state={
            

        }
    }
    
    render(){
        return (
            <Fragment >              
               <AsideMenu  />
            </Fragment>

        )
    }

}
export default LayoutAside;