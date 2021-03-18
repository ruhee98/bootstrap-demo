import React, {Fragment} from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HeaderComponent extends React.Component {

    render(){
        return(
           <Fragment>
             <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <LinkContainer to="/signup">
      <Nav.Link>Sign Up </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link>Login </Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
 </Fragment>
           
        )
    }
}



export default HeaderComponent;