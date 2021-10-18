import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';

const Header = () => {
    return (
        <div>
        <header >
            <nav className="navbar navbar-expand-sm bg-info text-dark navbar-dark pb-0 pt-0 ps-5 pe-5">                
                <Link to="/" className="navbar-brand">
                    <img className="rounded-circle" src={logo} style={{width:'80px'}} alt="Logo" />
                </Link>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/home' className="nav-item text-decoration-none ">Home</Link>
                        <Link to='/service' className="nav-item text-decoration-none ">Services</Link>
                        {/* <Link to='/' className="nav-item text-decoration-none "></Link> */}
                        <Link to='/contact' className="nav-item text-decoration-none ">Contact us</Link>
                        <Link to='/login' className="nav-item text-decoration-none ">Login</Link>

                    </ul>
                </div>
            </nav>
        </header>    
    </div>
    );
};

export default Header;