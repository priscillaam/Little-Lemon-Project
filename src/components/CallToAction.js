import React from "react";
import reserveImg1 from "../assets/restaurant-food.jpg";

export const CallToAction = () => {
    return (
        <section id='reserve' className="grid">
      <div className="reserve-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p className="leading">We are a family owned Mediterranean restaurant, focused
            on traditional recipes served with a modern twist.</p>
        <button className='button'>Reserve a Table</button>
      </div>
      <div className="reserve-img">
        <img src={reserveImg1} alt="reservation"/>
      </div>
    </section>
    )
}
export default CallToAction;