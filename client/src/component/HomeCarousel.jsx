import React from 'react';

const HomepageCarousel = () => {
    return (
        <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://placehold.co/1200x500/lightblue/white" className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First Slide</h5>
                        <p>Sample text for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://placehold.co/1200x500" className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second Slide</h5>
                        <p>Sample text for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://placehold.co/1200x500/pink/white" className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third Slide</h5>
                        <p>Sample text for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomepageCarousel;
