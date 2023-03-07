import React from "react";
import reserveImg1 from "../../assets/restaurant-food.jpg";
import './CallToAction.css';

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

// #reserve{
//   padding: 0 40px 20px 40px;
//   background: linear-gradient(to bottom, var(--primary) 85%, white 0%);
// }
// .reserve-text{
//   grid-column: 1/9;
//   margin-top: 10%;
// }
// .reserve-text *{
//   display: flex;
//   margin: 0 auto;
// }
// .reserve-img{
//   grid-column: 1/9;
//   margin: 0 auto;
// }
// .reserve-img img{
//   width: 100%;
//   border-radius: 8px;
//   display: flex;
//   margin: 20px auto;
// }
// .reserve-text h2{
//   color: var(--secondary);
//   margin-bottom: 0;
//   font-size: 2em;
//   line-height: .5em;
// }
// .reserve-text h3{
//   margin-top: 0;
//   font-size: 1.3em;
// }
// .reserve-text p{
//   font-family: 'Karla';
//   font-size: .8em;
//   font-weight: 600;
//   margin-top: 20px;
// }
// .reserve-text button{
//   margin: 30px 0;
// }