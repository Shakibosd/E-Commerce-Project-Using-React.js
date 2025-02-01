import './HeroSection.css';

const HeroSection = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner pt-4">
                    <div className="carousel-item active">
                        <img src="./image/slider2.jpg" height='200px' className="d-block w-100 img-fluid" alt="slider1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./image/slider1.jpg" className="d-block w-100 img-fluid" alt="slider2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./image/slider3.jpg" className="d-block w-100 img-fluid" alt="slider3" />
                    </div>
                    <div className="carousel-item">
                        <img src="./image/slider4.jpg" className="d-block w-100 img-fluid" alt="slider4" />
                    </div>
                    <div className="carousel-item">
                        <img src="./image/slider5.jpg" className="d-block w-100 img-fluid" alt="slider5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;