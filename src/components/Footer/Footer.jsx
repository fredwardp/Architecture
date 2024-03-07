import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container footer_wrapper">
        <img className="footer_logo" src="./public/img/logo.png" alt="" />
        <div className="footer_column">
          <h3>Information</h3>
          <Link>Main</Link>
          <Link>Gallery</Link>
          <Link>Projects</Link>
          <Link>Certification</Link>
          <Link>Contacts</Link>
        </div>
        <div className="footer_column">
          <h3>Contacts</h3>
          <div className="footer_icon_div">
            <img src="./public/img/standort.svg" alt="" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
          <div className="footer_icon_div">
            <img src="./public/img/phone.svg" alt="" />
            <p>512.333.2222</p>
          </div>
          <div className="footer_icon_div">
            <img src="./public/img/mail.svg" alt="" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>
        <div className="footer_column">
          <h3>Social Media</h3>
          <div className="icon_wrapper">
            <img src="./public/img/facebook.svg" alt="" />
            <img src="./public/img/twitter.svg" alt="" />
            <img src="./public/img/linkedin.svg" alt="" />
            <img src="./public/img/pininterest.svg" alt="" />
          </div>
        </div>
      </div>
      <p className="copyright">© 2019 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
