import React from 'react';
import './Service.css'
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service)
    const { name, picture, price, about } = props.service
    return (
        <div className='col-lg-4 col-sm-12'>
            <Card className='shadow-lg p-3 mb-5 bg-body rounded'>

                <Card.Img className='img-fluid' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <h5>Price : {price}</h5>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button className='checkout' variant="dark">Checkout</Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Service;