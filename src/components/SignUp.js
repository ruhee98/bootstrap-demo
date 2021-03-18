import React, {useState} from 'react';
import {Col, Card, InputGroup, Form, Button} from 'react-bootstrap';
import { BootstrapModal } from './BootstrapModal';

const defaultState = {
  first: '',
  last: '',
  username: '',
  password: ''
};


function SignUpForm(){
    const [validated, setValidated] = useState(false);
    const [formValues, setFormValues] = useState(defaultState);
    const [showModal, setShowModal] = useState(false);

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
        <Card style={{ width: '30rem' }} >
            <Card.Title>
                Sign Up
            </Card.Title>
            <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
          <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={formValues.first}
            onChange={onChange('first')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="S"
            value={formValues.last}
            onChange={onChange('last')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Form.Group controlId="validationCustomUsername">
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
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group>
      <Form.Label htmlFor="inputPassword6">Password</Form.Label>
         <Form.Control
      type="password"
      id="inputPassword6"
      aria-describedby="passwordHelpInline"
    />
    <Form.Control
                type="password"
                id="inputPassword6"
                aria-describedby="passwordHelpInline"
                required
                value={formValues.password}
                onChange={onChange('password')}
      />
    <Form.Text id="passwordHelpInline" muted>
      Must be 8-20 characters long.
    </Form.Text>
    </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Card.Body>
    </Card>
    <BootstrapModal
        show={showModal}
        title={'Success'}
        body={`Welcome to our platform, @${formValues.username}!`}
        onDismiss={() => setShowModal(false)}
      />
  </div>
        )
        
        }


export default SignUpForm;



