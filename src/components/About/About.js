import React from "react";
import aboutImg1 from '../../assets/mario-and-adrian1.jpg';
import aboutImg2 from '../../assets/mario-and-adrian2.jpg';
import './About.css';

export const About = () => {
    return(
        <section id="about" className="grid">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
            Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in
            Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
                    The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div className='img-stack'>
            <img src={aboutImg1} alt=""/>
            <img src={aboutImg2} alt=""/>
        </div>
    </section>
    )
}

export default About;