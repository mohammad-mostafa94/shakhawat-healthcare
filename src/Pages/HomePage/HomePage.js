import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Services from './Services/Services';

const HomePage = () => {
    return (
        <div>
            {/* <h1>Bismillah Hirrah Manir Rahim</h1> */}
            <Header></Header>
            <Home></Home>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;