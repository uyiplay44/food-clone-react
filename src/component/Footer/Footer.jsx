import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import FooterImg from "../../assets/footerbadge.png";

export default function Footer() {
  return (
    <div className="footMain">
      <div className="footContainer">
        <div className="foot__tag1">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="foot__tag1">
          <h2>Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Safety Center</li>
          </ul>
        </div>
        <div className="foot__tag1">
          <h2>Legal</h2>
          <ul>
            <li>Cookie Policy</li>
            <li>Privocy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="foot__tag4">
          <h2>Install App</h2>
          <img src={FooterImg} alt="footerimg" />
        </div>
      </div>
      <div className="foottitle">
        <div className="foottag">
          <p>© 2024 LILIES, All rights reserved</p>
        </div>
        <div className="footicon">
          <FaInstagram />
          <FaSquareFacebook />
          <BsTwitterX />
        </div>
      </div>
    </div>
  );
}
