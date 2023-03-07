import './App.css';
import './styles/styles.css';
import Nav from './components/Navigation/Nav';
import BookingPage from './components/Pages/BookingPage';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/HomePage';
import './styles/responsive.css'

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
