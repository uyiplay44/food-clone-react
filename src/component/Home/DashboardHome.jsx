import "./DashboardHome.css";
import Dashboardlogo from "../../assets/Group 12.png";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import profilephoto from "../../assets/Group 12.png"; // import profile photo

function DashboardHome() {
  return (
    <div className="dashboardMain">
      <div className="dashboardContainer">
        {/* First Div Start */}
        <div className="dashboardFirstContent">
          <div className="dashboardLogo">
            <img src={Dashboardlogo} alt="" />
            <h1>Lilies Food</h1>
          </div>
          <nav className="dashboardNav">
            <Link className="active">
              <CgProfile />
              <h3>Your Profile</h3>
            </Link>
            <Link className="active">
              <CiShop />
              <h3>Orders</h3>
            </Link>
            <Link className="active">
              <CiShoppingCart />
              <h3>Your Cart</h3>
            </Link>
          </nav>
        </div>
        {/* first div end */}

        {/* Second Div Start */}

        <div className="dashboardSecondContent">
          <div className="dashboardBar">
            <div>
              <h1>Good morning, Oghenevwede!</h1>
              <p>What delicious meal are you craving today?</p>
            </div>

            <div>
              <img src={profilephoto} alt="profilephotos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
