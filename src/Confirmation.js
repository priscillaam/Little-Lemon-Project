import { Link } from "react-router-dom";
import CarouselDemo from "./components/Carousel";

export default function Confirmation() {
  return (
    <div className='confirmWrapper'>
        <div className="carousel">
            <CarouselDemo />
        </div>
        <section className="reserve-header-text">
            <h1>Confirmed!</h1>
            <p>A confirmation message has been sent to your email. Thanks for dining with us!</p>

            <section className="redirect-buttons">
                <Link className="redirect-button" to="/contact">
                    Contact
                </Link>
                <Link className="redirect-button" to="/order">
                    Order Online
                </Link>
                <Link className="redirect-button" to="/">
                    Home Page
                </Link>
            </section>
        </section>
    </div>
  );
}