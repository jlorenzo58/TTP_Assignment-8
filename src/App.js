import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import "./App.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
    this.mockLogIn = this.mockLogIn.bind(this);
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.currentUser.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    
    return (
        <Router>
          <div>
            <Route exact path="/" element={<HomeComponent/>}/>
            <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
            <Route exact path="/login" element={<LogInComponent/>}/>
          </div>
        </Router>
    );
  }

}

export default App;