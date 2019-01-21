import React, { Component } from 'react';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import cookies from 'react-cookies';

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ''
    }
    // this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.setState({userEmail: cookies.load('userEmail')})
  }


  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Rails API with React</NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>{this.state.userEmail}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

export default UserNav