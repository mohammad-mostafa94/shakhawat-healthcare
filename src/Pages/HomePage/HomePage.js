import React from 'react';
import Features from './Features/Features';
import Heading from './Heading/Heading';
import Home from './Home/Home';
import Services from './Services/Services';
import Team from './Team/Team';

const HomePage = () => {
    return (
        <div>
            <Heading></Heading>
            <Home></Home>
            <Team></Team>
            <Services></Services>
            <Features></Features>
        </div>
    );
};

export default HomePage;