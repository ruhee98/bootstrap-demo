import React, { useState } from 'react';
import {Col, Card, Form, Button, InputGroup} from 'react-bootstrap';
import {BootstrapModal} from './BootstrapModal';
const defaultState = {
  username: '',
  password: ''
};

const LoginForm =  () => {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(defaultState);

  const onChange = (key) => (e) => {
    setFormValues({
      ...formValues,
      [key]: e.target.value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      setShowModal(true);
    }
    setValidated(true);
  };
    return (
<div>
<Card style={{ width: '30rem'}}>
<Card.Title>
   Welcome Back! 
</Card.Title>
<Card.Body>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group controlId="usernmae">
    <Form.Label>Username</Form.Label>

                <InputGroup hasValidation>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={formValues.username}
                  onChange={onChange('username')}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </InputGroup>
              </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required 
                  type="password" 
                  placeholder="Password" />
  </Form.Group>
  <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
  </Col>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
<BootstrapModal
        show={showModal}
        title={'Success'}
        body={`Welcome back, @${formValues.username}!`}
        onDismiss={() => setShowModal(false)}
      />
</div>
    )
}

export default LoginForm;



