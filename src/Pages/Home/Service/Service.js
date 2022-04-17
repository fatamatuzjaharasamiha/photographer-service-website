import React from 'react';
import './Service.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service)
    const { name, picture, price, about } = props.service
    return (
        <div className='col-lg-4 col-sm-12 g-5 box'>
            <Card className='shadow-lg p-4 m-5 bg-body rounded'>
                <Card.Img className='img-fluid' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <h5>Price : {price}</h5>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Link className='p-4' to='/checkout'><button type="button" className="btn btn-dark">Checkout</button></Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Service;