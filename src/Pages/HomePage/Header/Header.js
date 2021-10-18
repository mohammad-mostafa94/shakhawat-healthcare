import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../../images/logo.jpg';
import './Header.css';

const Header = () => {

    const {user,logOut} = useFirebase();

    const activeStyle={
        fontWeight: "bold",
        color: "blue"
        }

    return (
        <div>
        <header >
            <nav className="navbar navbar-expand-sm   py-0 px-5 mb-3">                
                <Link to="/" className="navbar-brand">
                    <img className="rounded-circle" src={logo} style={{width:'80px'}} alt="Logo" />
                </Link>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <NavLink activeStyle={activeStyle} to='/home'  className="nav-item linkStyle ">Home</NavLink>

                        <NavLink activeStyle={activeStyle} to='/service' className="nav-item linkStyle">Services</NavLink>

                        <NavLink activeStyle={activeStyle} to='/team' className="nav-item linkStyle">Team</NavLink>

                        <NavLink activeStyle={activeStyle} to='/feature' className="nav-item linkStyle">Feature</NavLink>

                        <NavLink activeStyle={activeStyle} to='/contact' className="nav-item linkStyle">Contact us</NavLink>

                        {user.email ? <button onClick={logOut} className="btn btn-primary mx-1 py-0">Logout</button> : <NavLink activeStyle={activeStyle} to='/login' className="nav-item text-decoration-none ms-2 ">Login</NavLink>}

                    </ul>
                </div>
            </nav>
        </header>    
    </div>
    );
};

export default Header;