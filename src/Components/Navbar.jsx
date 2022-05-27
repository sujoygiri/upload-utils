// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    // const [onClick, setOnClick] = useState(false);
    
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={require('../Assets/upload.png')} alt="logo" />
                        <span className="site-name">UploadUtil</span>
                    </Link>
                </div>
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;