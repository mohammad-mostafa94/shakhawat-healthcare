import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.jpg';

const Header = () => {

    const activeStyle={
        fontWeight: "bold",
        color: "blue"
        }

    return (
        <div>
        <header >
            <nav className="navbar navbar-expand-sm bg-info text-dark navbar-dark py-0 px-5">                
                <Link to="/" className="navbar-brand">
                    <img className="rounded-circle" src={logo} style={{width:'80px'}} alt="Logo" />
                </Link>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <NavLink activeStyle={activeStyle} to='/home' className="nav-item text-decoration-none  ms-2">Home</NavLink>
                        <NavLink activeStyle={activeStyle} to='/service' className="nav-item text-decoration-none  ms-2">Services</NavLink>
                        <NavLink activeStyle={activeStyle} to='/team' className="nav-item text-decoration-none  ms-2">Team</NavLink>
                        <NavLink activeStyle={activeStyle} to='/feature' className="nav-item text-decoration-none  ms-2">Feature</NavLink>
                        {/* <Link to='/' className="nav-item text-decoration-none  ms-2"></Link> */}
                        <NavLink activeStyle={activeStyle} to='/contact' className="nav-item text-decoration-none ms-2 ">Contact us</NavLink>
                        <NavLink activeStyle={activeStyle} to='/login' className="nav-item text-decoration-none ms-2 ">Login</NavLink>

                        {/* <button className="btn btn-primary">Logout</button> */}

                    </ul>
                </div>
            </nav>
        </header>    
    </div>
    );
};

export default Header;