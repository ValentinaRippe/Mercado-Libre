import PropTypes from "prop-types";
import { useFetchSearchProducts } from "../../hooks/useFetchSearchProducts";
import { CardProduct } from "../cardProduct/CardProduct";
import { Loader } from "../loader/Loader";
import "./ListProducts.scss";

export const ListProducts = ({ param }) => {
  const { products, categories, isLoading } =
    useFetchSearchProducts(param);

  return (
    <div className="products-list">
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {categories.length > 0 && !isLoading && (
        <small className="categories">
          {categories.join(" > ")}
        </small>
      )}
      <div className="list">
        {products.length > 0
          ? products?.map((item) => (
              <CardProduct key={item.id} item={item} />
            ))
          : !isLoading && "No Products Found"}
      </div>
    </div>
  );
};

ListProducts.propTypes = {
  param: PropTypes.string.isRequired,
};
