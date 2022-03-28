import image from "../image/image 29(1).png";
import { CheckCircleOutlined, StarFilled } from "@ant-design/icons";
function Card({ title, stock, reviews, prise, beforePrise }) {
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
      <p className="card-prise">₸{prise}</p>
    </div>
  );
}

export default Card;
