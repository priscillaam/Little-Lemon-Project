import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <div className="wrapper">
      <div className="header"><Header /><Nav /></div>
      <div className="main"><Main /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
