import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import truckIcon from "../../assets/truck.svg";
import "./CardProduct.scss";

export const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/items/${item.id}`)}
      className="card"
    >
      <div className="image">
        <img src={item.picture} alt="" />
      </div>
      <div className="info">
        <div className="price">
          <h2>$ {item.price.amount}</h2>
          {item.free_shipping && (
            <span className="badge">
              <img src={truckIcon} alt="" />
            </span>
          )}
        </div>
        <h4 className="title">{item.title}</h4>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  item: PropTypes.object,
};
