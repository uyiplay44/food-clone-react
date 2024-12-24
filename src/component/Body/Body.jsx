import "./Body.css";
import Slide from "../../assets/Badges.png";
import Bodylogo from "../../assets/homephoto1.jpeg";

function Body() {
  return (
    <div className="bodySection">
      <div className="bodyContainer">
        <div className="bodyMain">
          <div className="bodyTitle">
            <p>
              Order <span>food</span> anytime, anywhere
            </p>
          </div>
          <div className="bodySubTitle">
            <p>
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
          </div>
          <div className="">
            <img src={Slide} alt="" />
          </div>
        </div>
        <div className="bodyImg">
          <img src={Bodylogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
