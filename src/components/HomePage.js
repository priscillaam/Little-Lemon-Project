import React from "react";
import CallToAction from './CallToAction';
import Specials from './Specials';
import Reviews from './Reviews';
import About from './About';

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