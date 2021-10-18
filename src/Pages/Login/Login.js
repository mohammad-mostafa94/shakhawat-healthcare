import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInzUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInzUsingGoogle}>Googe sign In</button>
        </div>
    );
};

export default Login;