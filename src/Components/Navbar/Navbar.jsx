import './navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">MY ORDER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">SIGNUP / LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">AFFILIATE PROGRAM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">ভাষা</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
