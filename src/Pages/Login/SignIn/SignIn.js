import React from 'react';
import './SignIn.css'
import { Button, Form } from 'react-bootstrap';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const SignIn = () => {

   

    const handleCreateUser = () => {
        console.log('click')
    }


    return (
        <div className=''>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto mt-5 shadow-lg p-5 bg-body rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
                <GoogleLogin></GoogleLogin>
            </Form>
           
        </div>
    );
};

export default SignIn;