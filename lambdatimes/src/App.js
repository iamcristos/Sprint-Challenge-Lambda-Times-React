import React, {Component} from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import {Authenticate} from './Authenticate/authenticate'
import Login from './components/Login/Login'
class App extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      login: true
    }
  }
 loginHandler = ()=>{
   if (this.state.login){
     localStorage.removeItem('username')
    }
    this.setState({login: !this.state.login})
  }
  render () {
    const AuthUser = Authenticate(Content)(Login);
    return (
      <div className="App">
        <TopBar  login={this.loginHandler} isLogin={this.state.login}/>
        <Header />
        <AuthUser loginHandler={this.loginHandler} login={this.state.login}/>
      </div>
    );
  }
}

export default App;
