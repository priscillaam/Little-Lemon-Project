import './App.css';
import './styles/styles.css';
import reserveImg1 from './assets/restaurant-food.jpg';
import specialImg1 from './assets/greek-salad.jpg';
import specialImg2 from './assets/bruchetta.svg';
import specialImg3 from './assets/lemon-dessert.jpg';
import aboutImg1 from './assets/mario-and-adrian1.jpg';
import aboutImg2 from './assets/mario-and-adrian2.jpg';
import user1 from './assets/man-reviewer1.jpg';
import user2 from './assets/woman-reviewer1.jpg';
import user3 from './assets/woman-reviewer2.jpg';
import user4 from './assets/man-reviewer2.jpg';

function App() {
  return (
    <>
    <nav className="site-nav grid">
      <h1>Little Lemon</h1>
      <ul>
        <li><a href='#reserve'>Reserve</a></li>
        <li><a href='#specials'>Specials</a></li>
        <li><a href='#about'>About</a></li>
      </ul>
    </nav>
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
    <section id="specials">
      <h2>This weeks specials!</h2>
      <button className='button'>Online Menu</button>
      <div className="specials grid">
        <a href=''>
          <img src={specialImg1} alt=""/>
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <p>The famous greek salad of crispy lettuce, peppers, olives
            and our Chicago style feta cheese garnished with
            crunchy garlic and rosemary croutons.</p>
          <button>Order a delivery</button>
        </a>
        <a href=''>
          <img src={specialImg2} alt=""/>
          <h3>Bruchetta</h3>
          <p>$5.99</p>
          <p>Our Bruchetta is made from grilled bread that has
            been smothered with garlic and seasoned with salt
            and olive oil.
          </p>
          <button>Order a delivery</button>
        </a>
        <a href=''>
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
    <section id="reviews">
      <h2>Testimonials</h2>
      <div className="reviews grid">
        <article>
          <img src={user4} alt=""/>
          <h3>Jason Nguyen</h3>
          <h3>Jason Nguyen</h3>
          <p>Super fresh delicious food.</p>
        </article>
        <article>
          <img src={user2} alt=""/>
          <h3>Olivia Rose</h3>
          <p>Fantastic knowledgable service.</p>
        </article>
        <article>
          <img src={user1} alt=""/>
          <h3>Michael Smith</h3>
          <p>Food is packed with flavours but light and healthy.</p>
        </article>
        <article>
          <img src={user3} alt=""/>
          <h3>Desiree Parker</h3>
          <p>The employees provide quick and efficient service.</p>
        </article>
      </div>
    </section>
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
    <footer className="grid">
        <div className='contact-info'>
          <h4>Contact</h4>
            <ul>
              <li>2395 Maldove Way,<br/>Chicago Illinois</li>
              <li>(629) 243-6827</li>
              <li>info@littlelemon.com</li>
            </ul>
        </div>
        <div className='social-media'>
          <h4>Connect</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Join us!</li>
            </ul>
        </div>
    </footer>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLittleLemon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes> */}
    </>
  );
}

export default App;
