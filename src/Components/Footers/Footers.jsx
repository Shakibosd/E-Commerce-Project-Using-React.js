import './Footers.css';

const Footers = () => {
    return (
        <div>
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-start">
                            <h5><b>About Us</b></h5>
                            <p>
                                We provide the best services to our customers. Follow us on social
                                media to stay updated.
                            </p>
                        </div>

                        <div className="col-md-4 text-center">
                            <h5><b>Quick Links</b></h5>
                            <ul className="list-unstyled">
                                <li><a className="text-light text-decoration-none">Home</a></li>
                                <li><a className="text-light text-decoration-none">About</a></li>
                                <li><a className="text-light text-decoration-none">Contact</a></li>
                                <li><a className="text-light text-decoration-none">Product</a></li>
                                <li><a className="text-light text-decoration-none">Register</a></li>
                                <li><a className="text-light text-decoration-none">Login</a></li>
                                <li><a className="text-light text-decoration-none">ভাষা</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-center text-md-end">
                            <h5><b>Follow Us</b></h5>
                            <a href="https://www.facebook.com/syednazmusshakib.shakib" target='_blank' className="text-light me-2"><i className="bx bxl-facebook-square fs-5"></i></a> 
                            <a href="https://x.com/syed_shaki27278" target='_blank' className="text-light me-2"><i className="bx bxl-twitter fs-5"></i></a> 
                            <a href="https://www.instagram.com/shakibosd/?next=%2F" target='_blank' className="text-light me-2"><i className="bx bxl-instagram fs-5"></i></a> 
                            <a href="https://www.linkedin.com/in/syed-nazmus-shakib-686985264/" target='_blank' className="text-light me-2"><i className="bx bxl-linkedin-square fs-5"></i></a> 
                            <a href="https://github.com/Shakibosd" target='_blank' className="text-light me-2"><i className='bx bxl-github fs-5'></i></a> 
                            <a href="https://www.youtube.com/@syednazmusshakib1833" target='_blank' className="text-light me-2"><i className='bx bxl-youtube fs-5'></i></a>
                        </div>
                    </div>

                    <hr className="my-3 text-light" />

                    <div className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved. Developed With <a className='text-light' target='_blank' style={{textDecoration:'none'}} href="https://myprotfolios.netlify.app/"><b>Nazmus Sahkib</b></a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footers;