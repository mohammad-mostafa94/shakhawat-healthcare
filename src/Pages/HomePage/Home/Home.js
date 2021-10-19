import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import doctor1 from "../../../images/doctors/doctors-1.jpg";
import doctor3 from "../../../images/doctors/doctors-3.jpg";
import doctor4 from "../../../images/doctors/doctors-4.jpg";
import doctor5 from "../../../images/doctors/doctors-5.jpg";
import doctor6 from "../../../images/doctors/doctors-6.jpg";
import doctor7 from "../../../images/doctors/doctors-7.jpg";

const Home = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="container-fluid text-center ">
            <h1 className ="text-success">SHAKHAWAT HEALTHCARE</h1>
            <p>We welcome new patients from all communities and look forward to seeing you at one of our clinics. </p>
            <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                >
                    <div data-src={doctor1} />
                    <div data-src={doctor3} />
                    <div data-src={doctor4} />
                    <div data-src={doctor5} />
                    <div data-src={doctor6} />
                    <div data-src={doctor7} />
                </AutoplaySlider>
        </div>
    );
};

export default Home;