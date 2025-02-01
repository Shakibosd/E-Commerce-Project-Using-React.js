import './navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid container">
                    <a className="navbar-brand"><img src="./image/web.jpeg" width='70' alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form className="d-flex nav-er-items gap-4 align-items-center list-unstyled" role="search">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">PRODUCT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">ভাষা</a>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
