import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import aboutImage1 from '../images/mario-and-adrian1.jpg';
import bruchetta from '../images/bruchetta.svg';
import aboutImage2 from '../images/mario-and-adrian2.jpg';

export default function CarouselDemo() {
        return (
            <Carousel>
                <div>
                    <img src={bruchetta} alt='carousel-img' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={aboutImage1} alt='carousel-img'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={aboutImage2} alt='carousel-img'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
}