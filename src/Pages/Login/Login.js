import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {signInzUsingGoogle,isLoggedIn,formHandle,nameHandle,emailHandle,passwordHandle,checkHandler,resetPasswordHandle,error} = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInzUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="w-50 mh-100 mx-auto text-center mb-5">
            <h1 className="text-primary ">Please {isLoggedIn?"login": "resister"}</h1>
            
                <form onSubmit={formHandle}>
                    {!isLoggedIn && <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Enter Your name..</label>
                    <input onBlur={nameHandle} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" required/>
                    <div id="nameHelp" className="form-text">We'll never share your username anyone else.</div>
                    </div>}
                    
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={emailHandle} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input required type="password" onBlur={passwordHandle} className="form-control" id="exampleInputPassword1"/>
                    </div>

                    {!isLoggedIn &&<div className="form-group">
                    </div>}

                    <div className="mb-3 form-check">
                    <input onChange={checkHandler} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Are you already register?</label>
                    </div>

                    <div><p className="text-danger">{error}</p></div>
                    <button type="submit" className="btn btn-primary">{isLoggedIn ?"login": "resister"}</button> 
                    <br />
                    <br />
                    {isLoggedIn && <button onClick={resetPasswordHandle} className="btn btn-secondary">Reset Password</button>}
                </form>
            {!isLoggedIn && <h2 className="text-center">----or----</h2>}

            {!isLoggedIn && <button className="btn btn-success"  onClick={handleGoogleLogin}>Googe sign In</button>}
        </div>
    );
};

export default Login;