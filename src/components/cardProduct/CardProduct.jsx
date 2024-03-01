import PropTypes from "prop-types";

export const CardProduct = ({ item }) => {
  return <div>{item.title}</div>;
};

CardProduct.propTypes = {
  item: PropTypes.object,
};
