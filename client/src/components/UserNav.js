import React, { Component } from 'react';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import cookies from 'react-cookies';
import { userRequest } from '../helpers/usersRequestHelper';

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      redirectToReferrer: true
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    userRequest.logout()
    .then((response) => {
      cookies.remove('userId')
      cookies.remove('userEmail')
      cookies.remove('userAuthToken')
      cookies.remove('userRole')
      this.props.history.push("/sign_in");
    })
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
                <NavLink onClick={this.handleLogout}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

export default UserNav