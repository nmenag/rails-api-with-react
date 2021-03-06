import React, { Component } from 'react'
import {Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom'
import { userRequest } from '../helpers/usersRequestHelper';
import cookies from 'react-cookies';
import AlertDismissable from './AlertDismissable';


class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      sessionReferrer: false,
      redirectToReferrer: false,
      errors: []
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentWillMount(e) {
    if (cookies.load('userAuthToken')) {
      this.setState({ sessionReferrer: true })
      this.props.history.push("/invoices");
    }
  }

  updateEmail(e) {
    this.setState({ email: e.target.value })
  }

  updatePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const userEmail = this.state.email
    const password = this.state.password
    userRequest.signIn(userEmail, password)
    .then((response) => {
      const user = response.data
      cookies.save('userId', user.id, { path: '/' })
      cookies.save('userEmail', user.email, { path: '/' })
      cookies.save('userRole', user.role, { path: '/' })
      this.props.history.push("/invoices");
    })
    .catch((error) => {
      this.setState({ errors: error.response.data.errors })
    })
  }

  render () {
    const alerts = this.state.errors.map(
      (message, index) =>
      <AlertDismissable key={index} message={message}/>
    )
    return (
      <div class= 'container-form'>
        <div class='col-md-6 col-centered h-100'>
          <Card>
            <CardHeader>Sign In</CardHeader>
            {alerts}
            <CardBody>
          <CardText>
            <Form onSubmit={this.handleSubmit}>
              <Col>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="example@email.com"
                    required="true"
                    value={this.state.email}
                    onChange={this.updateEmail}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Password"
                    required="true"
                    value={this.state.password}
                    onChange={this.updatePassword}
                  />
                </FormGroup>
              </Col>
              <Button>Enter</Button>
            </Form>
            Don't have an account? <Link to="/">Register</Link>
          </CardText>
        </CardBody>
          </Card>
        </div>
      </div>
    );
  }
};

export default LoginForm