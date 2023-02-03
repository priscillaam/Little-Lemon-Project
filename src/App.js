import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import './styles/style.css';
import { Route, Routes } from 'react-router-dom';
import {AboutLittleLemon} from './About.js';
import {Contact} from './Contact.js';
import {Menu} from './Menu.js';
import {BookingForm} from './BookingForm.js';
import {OrderOnline} from './Order.js';
import {Home} from './Home.js';
import Confirmation from './Confirmation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Nav />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLittleLemon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    <div className='footer'>
          <Footer/>
        </div>
    </>
  );
}

export default App;
