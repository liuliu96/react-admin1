import React from 'react';

import {Switch, HashRouter, Route, Router, HashHistory, Link} from "react-router-dom";
//引用组件
import Login from "./views/Login/Index";
//引入样式
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
   
  }
  render(){
    return (
      <div className="test">
             
        <HashRouter>
          <Switch>
            <Route exact component={Login} path="/"/>            
          </Switch>
        </HashRouter>
      </div>
        );
  }
}
export default App;
