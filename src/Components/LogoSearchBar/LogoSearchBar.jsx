import './LogoSearchBar.css';

const LogoSearchBar = () => {
    return (
        <div className="container-fluid search-container pt-4 d-flex justify-content-center align-items-center">
            <img className='img-fluid' width='115' src="./image/logo.png" alt="logo search bar" />
            <input type="text" className='search-bar' placeholder='Search In Product'/>
            <button>Search</button>
        </div>
    );
};

export default LogoSearchBar;