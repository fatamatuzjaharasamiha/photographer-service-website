import React, { useState } from 'react';
import './SignIn.css'
import { Button, Form } from 'react-bootstrap';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className=''>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto mt-5 shadow-lg p-5 bg-body rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <h6>Loading...</h6>
                }
                <Button variant="dark" type="submit">
                    Sign In
                </Button>
                <GoogleLogin></GoogleLogin>
            </Form>

        </div>
    );
};

export default SignIn;