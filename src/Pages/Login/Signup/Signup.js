import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setEmail(event.target.value)
            console.log(email)
        }
        else {
            setError('Sorry!!!.This Email is Invalid')
        }

    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPass = event => {
        setConfirmPass(event.target.value)
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError('Password is not match...Try again')
            return;
        }
        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div>
            <h3>sign up</h3>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto mb-5 shadow-lg p-5 bg-body rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPass} type="password" placeholder="Confirm Password" required />

                </Form.Group>
                <h6>{error}</h6>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Signup;