import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        tempCredit:0,
        currentUser: {
        userName: 'bob_loblaw',
        debits:[],
        credits:[],
        accountBalance: 10,
        memberSince: '08/23/99',
      }
    }
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
    const DebitsComponent = () => (<Debits debits={this.state.currentUser.debits} user={this.state.currentUser} accountBalance={this.state.currentUser.accountBalance}/>)
    const CreditsComponent=()=>(<Credits credits ={this.state.currentUser.credits} user={this.state.currentUser} accountBalance={this.state.currentUser.accountBalance}/>)
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>} />
            <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
            <Route exact path="/login" element={<LogInComponent/>}/>
            <Route exact path="/credits" element={<CreditsComponent/>}/>
            <Route exact path="/debits" element={<DebitsComponent/>}/>
          </Routes>
        </div>
      </Router>
    );
  }

}

export default App;