import React, { Component } from 'react'
import {Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom'
import { userRequest } from '../helpers/usersRequestHelper';
import cookies from 'react-cookies'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  componentWillMount() {
    if (cookies.load('userAuthToken')) {
      BrowserRouter.push('/invoices')
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
    const passwordConfirm = this.state.passwordConfirm
    userRequest.register(userEmail, password, passwordConfirm)
    .then((response) => {
      BrowserRouter.push('/login')
    }).catch((error) => {
      this.setState({ errors: error.response.data.errors })
    })
  }

  render() {
    return (
      <div class= 'container-form'>
        <div class='col-md-6 col-centered h-100'>
          <Card>
            <CardHeader>Sign Up</CardHeader>
            <CardBody>
          <CardText>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@email.com"
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
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="confirmPassword"
                    placeholder=" Confirmation Password"
                  />
                </FormGroup>
              </Col>
              <Button>Register</Button>
            </Form>
          </CardText>
        </CardBody>
          </Card>
        </div>
      </div>
    );
  }
};

export default RegisterForm