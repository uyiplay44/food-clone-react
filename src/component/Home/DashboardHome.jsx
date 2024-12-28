import "./DashboardHome.css";
import Dashboardlogo from "../../assets/Group 12.png";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function DashboardHome() {
  return (
    <div className="dashboardMain">
      <div className="">
        <div>
          <div>
            <img src={Dashboardlogo} alt="" />
            <h1>Lilies Food</h1>
          </div>
          <nav>
            <Link>
              <CgProfile />
              <h3>Your Profile</h3>
            </Link>
            <Link>
              <CiShop />
              <h3>Orders</h3>
            </Link>
            <Link>
              <CiShoppingCart />
              <h3>Your Cart</h3>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
