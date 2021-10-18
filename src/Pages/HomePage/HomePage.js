import React from 'react';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Services from './Services/Services';

const HomePage = () => {
    return (
        <div>
            {/* <h1>Bismillah Hirrah Manir Rahim</h1> */}
            
            <Home></Home>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;