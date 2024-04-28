import "./footer.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { axios } from "../../lib/axios";
function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/subscribe", { email });
      if (response.statusText === "OK") {
        alert("You've successfully subscribed to our newsletter!");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("Failed to subscribe. Please try again later.");
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & condition</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3>Contact</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <Link to="/">(+212) 667263810</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link to="/">amfmarket@gmail.com</Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3>Newsletter</h3>
            <p>
              Recevez les dernières actualités et mises à jour directement dans
              votre boîte de réception.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          <Link>Home</Link>
        </p>
        <p>
          <Link>Cookies</Link>
        </p>
        <p>
          <Link>Help</Link>
        </p>
        <p>
          <Link>FQAs</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
