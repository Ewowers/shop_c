import image from "../image/image 29(1).png";
import { Button, Space } from "antd";
import { CheckCircleOutlined, StarFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
function Card({ image, title, stock, reviews, prise, beforePrise }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const add = () => {
    dispatch({ type: "TYPE_CREATE", obj: { title, que: 1, prise, image: image } });
  };
  const inStock = (
    <span className="in-stock">
      <CheckCircleOutlined /> in stock
    </span>
  );
  let before = <p className="card-before-prise">{beforePrise} ₸</p>;
  const Stat = ({ reviews }) => {
    let stars = [];
    for (let i = 1; i <= reviews; i++) {
      stars.push(<StarFilled key={stars.length} style={{ color: "#E9A426" }} />);
    }
    for (let i = reviews; i <= 4; i++) {
      stars.push(<StarFilled key={stars.length} style={{ color: "#CACDD8" }} />);
    }
    return (
      <div>
        {stars} <span>Reviews ({reviews})</span>
      </div>
    );
  };
  return (
    <div className="card">
      <img src={image} alt={title} />
      {stock ? inStock : null}
      <Stat reviews={reviews} />
      <p className="card-title">{title}</p>
      {beforePrise ? before : null}
      <div className="card-footer">
        <p className="card-prise">₸{prise}</p>
        <button className="card-add" onClick={add}>
          <ShoppingCartOutlined />
        </button>
      </div>
    </div>
  );
}

export default Card;
