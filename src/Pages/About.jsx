import "./About.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
function About() {
    return (
        <div>
            <Navbar/>
            <div className="about-wrapper">
                <div className="about-box">
                    <h1>About STRIDE</h1>

                    <p className="about-intro">
                        STRIDE is more than a sneaker store. We combine street culture,
                        innovation, and premium design to help you step into tomorrow
                        with confidence.
                    </p>

                    <div className="about-section">
                        <h3>Our Mission</h3>
                        <p>
                            To deliver stylish, high-quality sneakers that blend comfort,
                            performance, and everyday lifestyle.
                        </p>
                    </div>

                    <div className="about-section">
                        <h3>Why Choose Us?</h3>
                        <ul>
                            <li>Premium Brands</li>
                            <li>Secure Payments</li>
                            <li>Fast Delivery</li>
                            <li>Customer First Support</li>
                        </ul>
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default About;
