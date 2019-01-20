import React from 'react';
import {Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';


const LoginForm = () => {
  return (
    <div class= 'container-form'>
      <div class='col-md-6 col-centered h-100'>
        <Card>
          <CardHeader>Sign In</CardHeader>
          <CardBody>
        <CardText>
          <Form>
            <Col>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="Email"
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