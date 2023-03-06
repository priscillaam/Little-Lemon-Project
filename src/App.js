import './App.css';
import './styles/styles.css';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import { Route, Routes } from 'react-router-dom';
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
