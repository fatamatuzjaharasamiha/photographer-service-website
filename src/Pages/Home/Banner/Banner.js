import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/fDY81ZF/Photography-Logo-Design-Download-scaled.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/NTTbvsL/Free-Photography-Logo-Design-Template-Download-scaled.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://i.ibb.co/TT0KYkK/fef5b2104856591-5f6c1b5a60f27.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;