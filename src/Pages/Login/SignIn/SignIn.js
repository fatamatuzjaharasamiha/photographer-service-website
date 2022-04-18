import React, { useState } from 'react';
import './SignIn.css'
import { Button, Form, Spinner, Toast } from 'react-bootstrap';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
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

                {
                    loading && <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                }
                
                {
                    error && <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body className='text-danger'>{error?.message}</Toast.Body>
                    </Toast>
                }
                <br />

                <Button variant="dark" type="submit">
                    Sign In
                </Button>
                <GoogleLogin></GoogleLogin>
            </Form>

        </div>
    );
};

export default SignIn;