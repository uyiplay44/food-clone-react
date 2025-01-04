import { useParams } from "react-router-dom";
import Order12 from "../../assets/meal11.jpg";
import Order2 from "../../assets/meal2.jpg";
import Order3 from "../../assets/meal3.jpg";
import Order4 from "../../assets/meal4.jpeg";
import Order5 from "../../assets/meal5.jpg";
import Order6 from "../../assets/meal6.jpeg";

function Description() {
  const display = [
    {
      id: 1,
      img: Order12,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 2,
      img: Order2,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 3,
      img: Order3,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 4,
      img: Order4,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 5,
      img: Order5,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 6,
      img: Order6,
      title: "Stir fry Pasta",
      descript: "Stir fry pasta yada yada yada because of Sesan",
    },
  ];

  const { id } = useParams();

  const getProduct = display[id];

  const { title, descript } = getProduct;

  return (
    <div>
      <div>
        <h1>{title.Description}</h1>
        <p>{descript}</p>
      </div>
    </div>
  );
}

export default Description;
