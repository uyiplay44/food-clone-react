import "./OrderSection.css";
import OrderList from "./OrderIndex";
import { useNavigate } from "react-router-dom";

function OrderSection() {
  const nagivate = useNavigate();

  const handleClick = () => {
    nagivate("addCart");
  };

  return (
    <div className="orderMain">
      <div className="orderContainer">
        {OrderList.map((order, id) => (
          <div key={id} className="orderTag">
            <img src={order.img} alt="orderlist" />
            <h4>{order.title}</h4>
            <p className="orderdescrib">{order.descript}</p>
            <div className="orderPrice">
              <span className="orderList">N1,000</span>
              <button type="submit" className="orderBtn" onClick={handleClick}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSection;
