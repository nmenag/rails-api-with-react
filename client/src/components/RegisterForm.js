import React, { Component } from 'react'
import {Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';
import { userRequest } from '../helpers/usersRequestHelper';
import cookies from 'react-cookies'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      sessionReferrer: false,
      redirectToReferrer: false,
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updatePasswordConfirm = this.updatePasswordConfirm.bind(this)
  }

  componentWillMount(e) {
    if (cookies.load('userAuthToken')) {
      this.props.history.push("/invoices");
    }
  }

  updateEmail(e) {
    this.setState({ email: e.target.value })
  }

  updatePassword(e) {
    this.setState({ password: e.target.value })
  }

  updatePasswordConfirm(e) {
    this.setState({ passwordConfirm: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const userEmail = this.state.email
    const password = this.state.password
    const passwordConfirm = this.state.passwordConfirm
    userRequest.register(userEmail, password, passwordConfirm)
    .then((response) => {
      this.props.history.push("/sign_in");
    }).catch((error) => {
      console.log(error);
      this.setState({ errors:  error.response.data.errors })
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
            <Form onSubmit={this.handleSubmit}>
              <Col>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
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
                    required='true'
                    value={this.state.password}
                    onChange={this.updatePassword}
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Input
                    type="password"
                    name="ConfirmPassword"
                    id="confirmPassword"
                    placeholder=" Confirmation Password"
                    required="true"
                    value={this.state.passwordConfirm}
                    onChange={this.updatePasswordConfirm}
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