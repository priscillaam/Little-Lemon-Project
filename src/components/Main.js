import React from 'react';
import food from '../images/restaurant-food.jpg';
import greekSalad from '../images/greek-salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon-dessert.jpg';
import user from '../images/dummy-profile.jpg';
import aboutImage1 from '../images/mario-and-adrian1.jpg';
import aboutImage2 from '../images/mario-and-adrian2.jpg';

const Main = () => {
    const imgStyle = {
        width: '90%',
        height: '100%',
        objectFit: 'fill'
    }
    return (
        <>
            <div className='reserve'>
                <div className='reserveContainer1'>
                    <div className='container' >
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p style={{width: '68%'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a Table</button>
                    </div>
                </div>
                <div className='reserveContainer2'>
                    <div className='container'>
                        <img src={food} alt='table-image'/>
                    </div>
                </div>
            </div>
            <div className='specials'>
                <div className='specialsHeader'>
                        <h2>This weeks specials!</h2>
                    <div className='buttonDiv'>
                        <button className='menuButton'>Online Menu</button>
                    </div>
                </div>
                <div className="special1">
                    <img src={greekSalad} alt="greek-salad"/>
                    <div className="specialCard">
                        <h5>Greek Salad</h5>
                        <h6>$12.99</h6>
                        <p>The famous greek salad of crispy lettuce, peppers, olives
                            and our Chicago style feta cheese, garnished with crunchy
                            garlic and rosemary croutons.</p>
                    </div>
                    <h5>Order a delivery</h5>
                </div>
                <div className="special2">
                    <img src={bruchetta} alt="bruchetta"/>
                    <div className="specialCard">
                        <h5>Bruchetta</h5>
                        <h6>$5.99</h6>
                        <p>Our Bruschetta is made from grilled bread that has been
                            smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                    <h5>Order a delivery</h5>
                </div>
                <div className="special3">
                    <img src={lemonDessert} alt="lemon-dessert"/>
                    <div className="specialCard">
                        <h5>Lemon Dessert</h5>
                        <h6>$5.00</h6>
                        <p>This comes straight from grandma's recipe book, every last
                            ingredient has been sourced and is as authentic as can been
                            imagined.</p>
                    </div>
                    <h5>Order a delivery</h5>
                </div>
            </div>
            <div className='reviews'>
                <div className='reviewH'>
                    <h2>Testimonials</h2>
                </div>
                <div className='review1'>
                    <h5>4.9</h5>
                    <img src={user} alt='reviewer1'/>
                    <h6>Olivia Rose</h6>
                    <p>Super fresh delicious food.</p>
                </div>
                <div className='review2'>
                    <h5>4.7</h5>
                    <img src={user} alt='reviewer1'/>
                    <h6>Michael Smith</h6>
                    <p>Fantastic knowledgeable service.</p>
                </div>
                <div className='review3'>
                    <h5>4.6</h5>
                    <img src={user} alt='reviewer1'/>
                    <h6>John Lee</h6>
                    <p>Food is packed with flavours but light and healthy.</p>
                </div>
                <div className='review4'>
                    <h5>5.0</h5>
                    <img src={user} alt='reviewer1'/>
                    <h6>Desiree Parker</h6>
                    <p>The employees provide quick and efficient service.</p>
                </div>
            </div>
            <div className='about'>
                <div className='aboutContainer1'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p style={{width: '68%'}}>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in
                    Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
                    The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </div>
                <div className='aboutContainer2'>
                    <div className='aboutImage1'>
                        <img src={aboutImage1}/>
                    </div>
                    <div className='aboutImage2'>
                        <img src={aboutImage2}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;