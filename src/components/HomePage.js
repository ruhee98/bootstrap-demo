import React from 'react';
import {Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {
  const history = useHistory();
    return (
        <div>
          <h5> Welcome. This is the React Bootstrap Demo</h5>
          <p>By Tiffany Nguyen and Ruhee Shrestha</p>
          <Button onClick={() => history.push('/layout')}>
                Get Started
            </Button>
        </div>
    )
}

