import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInzUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInzUsingGoogle}>Googe sign In</button>
        </div>
    );
};

export default Login;