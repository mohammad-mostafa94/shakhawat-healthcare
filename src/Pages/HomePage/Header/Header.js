import React from 'react';
import { Button } from 'react-bootstrap';
import { BiLogOut } from 'react-icons/bi';
import { BsCardList } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.jpg';
import './Header.css';


const Header = () => {

    const {user,logOut} = useAuth();
    const userName = user.displayName;

    const activeStyle={
        fontWeight: "bold",
        color: "blue"
        }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm  navbarStyle navbar-dark  ">                
                    <Link to="/" className="navbar-brand">
                        <img className="rounded-circle p-0" src={logo} style={{width:'110px'}} alt="Logo" />
                    </Link>  

                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> <BsCardList /></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <NavLink activeStyle={activeStyle} to='/home'  className="nav-item linkStyle ">Home</NavLink>

                            <NavLink activeStyle={activeStyle} to='/service' className="nav-item linkStyle">Services</NavLink>

                            <NavLink activeStyle={activeStyle} to='/team' className="nav-item linkStyle">Team</NavLink>

                            <NavLink activeStyle={activeStyle} to='/feature' className="nav-item linkStyle">Feature</NavLink>

                            {userName && <h6 className="mx-3 mt-2 text-warning">{userName.split(' ')[0]}</h6>}

                            {userName ? <Button variant="secondary" className=" mx-2" onClick={logOut} >logout<BiLogOut/></Button> : <NavLink  to='/login' className="nav-item mx-2  btn btn-secondary ">Login <FiLogIn/> </NavLink>}

                        </ul>
                    </div>
                </nav>
            </header>    
        </div>
    );
};

export default Header;