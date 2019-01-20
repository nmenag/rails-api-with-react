import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';
// import { UserRequest } from './helpers/userRequests'

const RegisterForm = () => {
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
                <Label>Email</Label>
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
};

export default RegisterForm