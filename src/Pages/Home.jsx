import Body from "../component/Body/Body";
import Item from "../component/Item/Item";
import New from "../component/News/New";
import Nav from "../component/Nav/Nav";
import Footer from "../component/Footer/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Body />
      <Item />
      <New />
      <Footer />
    </div>
  );
}

export default Home;
