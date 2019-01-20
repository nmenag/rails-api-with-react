import React, { Component } from 'react';
// import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
