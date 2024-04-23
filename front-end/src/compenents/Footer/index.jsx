import "./footer.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "../Button";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div> */}
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <form action="">
              <input type="email" name="email" placeholder="Your Email" />
              {/* <Button Link="/">Signup</Button> */}
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