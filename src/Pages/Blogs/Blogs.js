import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (

        <div className='w-75 mx-auto mt-5 shadow-lg p-5 bg-body rounded'>
            <Accordion> <h1 className='pb-4'>Question and Answer</h1>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question :  Difference between authentication and authorization?</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-bold'>Answer :</span>The process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.In authentication process, users or persons are verified and in authorization, users or persons are validated.Authentication needs users login details.While it needs security levels.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question : Why are you using firebase? What other options do you have to implement authentication?</span>
                    </Accordion.Header>
                    <Accordion.Body><span className='fw-bold'>Answer :</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <span className='fs-5 fw-bold'>Question :  What other services does firebase provide other than authentication</span>
                    </Accordion.Header>
                    <Accordion.Body><span className='fw-bold'>Answer :</span> Without authentication firebase provides Hosting,cloud Firestone,storage,Analytics,Cloud Messaging,Authentication.Realtime Database,Remote Configuration.
                        Test Lab.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;