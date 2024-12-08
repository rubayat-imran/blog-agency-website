import React from 'react';

const OurGoal = () => {
    return (
        <section className="our-goal py-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h2 className="display-4">Our Goal</h2>
                        <p className="lead text-muted">
                            Our goal is to empower individuals and businesses by providing innovative and sustainable solutions that drive growth and success.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="icon mb-3">
                                    <i className="bi bi-lightbulb-fill text-primary fs-1"></i>
                                </div>
                                <h5 className="card-title">Innovation</h5>
                                <p className="card-text">
                                    We aim to innovate and create solutions that address modern challenges effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="icon mb-3">
                                    <i className="bi bi-people-fill text-primary fs-1"></i>
                                </div>
                                <h5 className="card-title">Community</h5>
                                <p className="card-text">
                                    Building strong and supportive communities is at the heart of what we do.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="icon mb-3">
                                    <i className="bi bi-bar-chart-fill text-primary fs-1"></i>
                                </div>
                                <h5 className="card-title">Growth</h5>
                                <p className="card-text">
                                    We strive to drive measurable growth and success for our clients and partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGoal;