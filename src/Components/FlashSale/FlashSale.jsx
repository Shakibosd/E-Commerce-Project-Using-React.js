import './FlashSale.css';

const f1 = './image/f1.jpg';
const f2 = './image/f2.jpg';
const f3 = './image/f3.jpg';
const f4 = './image/f4.jpg';
const f5 = './image/f5.jpg';
const f6 = './image/f6.jpg';

const FlashSale = () => {
    return (
        <div className="bg-top">
            <div className="container pt-2">
                <h3>FlashSale</h3>
                <div className="d-flex flex-wrap align-items-center flashsale-container pt-2">
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f1} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing....</p>
                            <p className='card-price'>৳400.99</p>
                            <small className='card-text'><strike className='text-muted'>৳600</strike>-33%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f2} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳135.87</h6>
                            <small className='card-text'><strike className='text-muted'>৳200</strike>-33%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f3} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳248.46</h6>
                            <small className='card-text'><strike className='text-muted'>৳700</strike>-65%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f4} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing.....</p>
                            <p className='card-price'>৳131.67</p>
                            <p className='card-text'><strike className='text-muted'>৳200</strike>-35%</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f5} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor sit, amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳76.23</h6>
                            <small className='card-text'><strike className='text-muted'>৳66</strike>-35%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={f6} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum, dolor sit amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳163.36</h6>
                            <small className='card-text'><strike className='text-muted'>৳550</strike>-70%</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;