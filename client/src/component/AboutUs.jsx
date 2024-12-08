import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-us pt-5 pb-4">
            <div className="container">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h2 className="display-4">About Us</h2>
                        <p className="lead text-muted">
                            We are a team of dedicated professionals committed to delivering exceptional solutions and services. Our mission is to empower businesses to achieve their goals with innovative and reliable technology.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Our Mission</h5>
                                <p className="card-text">
                                    To drive success and create value by delivering high-quality solutions tailored to our clients' needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Our Vision</h5>
                                <p className="card-text">
                                    To be a global leader in providing innovative and impactful technology services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Our Values</h5>
                                <p className="card-text">
                                    Integrity, innovation, and customer-centricity are at the heart of everything we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
