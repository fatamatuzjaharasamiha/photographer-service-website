import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className="container-fluid bg-dark text-light p-5 mt-5">
                <div className="row d-flex align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-8">
                        <h3>Best Photography</h3>
                        <p>Services are always available</p>
                    </div>
                    <div className="col-lg-4">
                        <img className='w-25 h-25' src="https://i.ibb.co/sQYjVRF/banner.jpg" alt="" />
                    </div>
                </div>

            </section>



        </footer>
    );
};

export default Footer;