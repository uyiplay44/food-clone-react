import "./Item.css";
import display from "./display";

function Item() {
  return (
    <div className="displayMain">
      <div className="displayContainer">
        <h3>Special Meals of the day!</h3>
        <p>
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
        <div className="listMenu">
          {display.map((list, id) => (
            <div key={id} className="listImg">
              <img src={list.img} alt="lolo" />
              <h4 className="displayTitle">{list.title}</h4>
              <p className="displayDescrip">{list.descript}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
