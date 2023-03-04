import './App.css';
import './styles/styles.css';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import About from './components/About';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route exact path="/booking" element={<BookingPage />} />
          </Route>
        </Routes>

    </>
  );
}

export default App;
