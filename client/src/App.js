import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import InvoiceIndex from './components/InvoiceIndex';
import UserNav from './components/UserNav';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route component={UserNav} />
            <Route exact path="/" component={RegisterForm} />
            <Route path="/sign_in" component={LoginForm} />
            <Route path="/invoices" component={InvoiceIndex} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;