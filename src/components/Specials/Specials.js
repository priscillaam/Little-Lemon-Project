import React from "react";
import specialImg1 from '../../assets/greek-salad.jpg';
import specialImg2 from '../../assets/bruchetta.svg';
import specialImg3 from '../../assets/lemon-dessert.jpg';
import './Specials.css';

export const Specials = () => {
    return(
        <section id="specials">
      <h2>This weeks specials!</h2>
      <button className='button'>Online Menu</button>
      <div className="specials grid">
        <a href='/'>
          <img src={specialImg1} alt=""/>
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>The famous greek salad of crispy lettuce, peppers, olives
            and our Chicago style feta cheese garnished with
            crunchy garlic and rosemary croutons.</p>
          <button>Order a delivery</button>
        </a>
        <a href='/'>
          <img src={specialImg2} alt=""/>
          <h3>Bruchetta</h3>
          <p>$5.99</p>
          <p>Our Bruchetta is made from grilled bread that has
            been smothered with garlic and seasoned with salt
            and olive oil.
          </p>
          <button>Order a delivery</button>
        </a>
        <a href='/'>
          <img src={specialImg3} alt=""/>
          <h3>Lemon Dessert</h3>
          <p>$5.00</p>
          <p>This comes straight from grandma's recipe book
            every las ingredient has been sourced and is as
            authentic as can be imagined.
          </p>
          <button>Order a delivery</button>
        </a>
      </div>
    </section>
    )
}

export default Specials;