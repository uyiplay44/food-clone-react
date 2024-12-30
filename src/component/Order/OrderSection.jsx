import "./OrderSection.css";
import OrderList from "./OrderIndex";

function OrderSection() {
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
              <button className="orderBtn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSection;
