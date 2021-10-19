import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import doctor1 from "../../../images/doctors/doctors-1.jpg";
import doctor2 from "../../../images/doctors/doctors-2.jpg";
import doctor3 from "../../../images/doctors/doctors-3.jpg";
import doctor4 from "../../../images/doctors/doctors-4.jpg";
import doctor5 from "../../../images/doctors/doctors-5.jpg";

const Home = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
            <h1 className ="text-center text-success">SHAKHAWAT HEALTHCARE</h1>
            <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                >
                    <div data-src={doctor1} />
                    <div data-src={doctor2} />
                    <div data-src={doctor3} />
                    <div data-src={doctor4} />
                    <div data-src={doctor5} />
                    {/* <div data-src="/path/to/image-1.png" />
                    <div data-src="/path/to/image-2.jpg" /> */}
                </AutoplaySlider>
        </div>
    );
};

export default Home;