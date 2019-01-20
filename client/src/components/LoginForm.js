import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';


const LoginForm = () => {
  return (
    <div class= 'container-form'>
      <div class='col-md-6 col-centered h-100'>
        <Card>
          <CardHeader>Sign In</CardHeader>
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
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
            <Button>Enter</Button>
          </Form>
        </CardText>
      </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm