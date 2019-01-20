import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={RegisterForm} />
          <Route path="/sign_in" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

export default App;
