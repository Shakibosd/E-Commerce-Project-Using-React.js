import './BarazMall.css';

const b1 = './image/b1.jpg';
const b2 = './image/b2.jpg';
const b3 = './image/b3.jpg';
const b4 = './image/b4.jpg';
const b5 = './image/b5.jpg';
const b6 = './image/b6.jpg';


const BarazMall = () => {
    return (
        <div className="bg-top">
            <div className="container pt-2">
                <h3>DarazMall</h3>
                <div className="d-flex flex-wrap align-items-center flashsale-container pt-2">
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b1} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing....</p>
                            <p className='card-price'>৳500.99</p>
                            <small className='card-text'><strike className='text-muted'>৳600</strike>-33%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b2} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor sit amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳235.87</h6>
                            <small className='card-text'><strike className='text-muted'>৳300</strike>-33%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b3} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳348.46</h6>
                            <small className='card-text'><strike className='text-muted'>৳700</strike>-65%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b4} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor, sit amet consectetur adipisicing.....</p>
                            <p className='card-price'>৳231.67</p>
                            <p className='card-text'><strike className='text-muted'>৳200</strike>-35%</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b5} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum dolor sit, amet consectetur adipisicing....</p>
                            <h6 className='card-price'>৳86.23</h6>
                            <small className='card-text'><strike className='text-muted'>৳66</strike>-35%</small>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-hover">
                        <img src={b6} className="img-fluid" alt="f-img" />
                        <div>
                            <p className='card-title'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <h6 className='card-price'>৳263.36</h6>
                            <small className='card-text'><strike className='text-muted'>৳550</strike>-70%</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4 text-center'>
                <button className='btn btn-outline-info w-25 p-2'>Load More</button>
                <br />
                <br />
            </div>
        </div>
    );
};

export default BarazMall;