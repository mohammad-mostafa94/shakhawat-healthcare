import React from 'react';
import notFound from "../../images/not-found.png";
const NotFound = () => {
    return (
        <div className="text-center">
            <img src={notFound} alt="" />
            <h1>404</h1>
            <h6>This page isn't available. Sorry about that.
            Try searching for something else.</h6>
        </div>
    );
};

export default NotFound;