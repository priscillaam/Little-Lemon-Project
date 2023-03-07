import React from "react";
import CallToAction from '../Hero/CallToAction.js';
import Specials from '../Specials/Specials';
import Reviews from '../Testimonials/Reviews';
import About from '../About/About';

export const Home = () => {
    return(
      <>
        <CallToAction />
        <Specials />
        <Reviews />
        <About />
      </>
    )
}

export default Home;