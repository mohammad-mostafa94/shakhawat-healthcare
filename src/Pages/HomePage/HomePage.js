import React from 'react';
import Features from './Features/Features';
import Home from './Home/Home';
import Services from './Services/Services';
import Team from './Team/Team';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Team></Team>
            <Services></Services>
            <Features></Features>
        </div>
    );
};

export default HomePage;