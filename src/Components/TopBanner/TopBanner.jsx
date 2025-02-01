import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="container text-center pt-4">
                <img src="./image/top.png" className="img-fluid" alt="top" />
                <div className="row pt-4">
                    <div style={{borderRadius:"10px"}} className="col bg-white m-2 py-2">
                        <img src="./image/feature1.png" width="50" className="img-fluid" alt="feature1" />
                        <a className="text-dark text-decoration-none ps-2">Free Shipping</a>
                    </div>
                    <div style={{borderRadius:"10px"}} className="col bg-white m-2 py-2">
                        <img src="./image/feature2.png" width="50" className="img-fluid" alt="feature2" />
                        <a className="text-dark text-decoration-none ps-2">Geocery Shopping</a>
                    </div>
                    <div style={{borderRadius:"10px"}} className="col bg-white m-2 py-2">
                        <img src="./image/feature3.png" width="50" className="img-fluid" alt="feature3" />
                        <a className="text-dark text-decoration-none ps-2">BarazMall</a>
                    </div>
                    <div style={{borderRadius:"10px"}} className="col bg-white m-2 py-2">
                        <img src="./image/feature4.png" width="50" className="img-fluid" alt="feature4" />
                        <a className="text-dark text-decoration-none ps-2">Digital Sheba</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;