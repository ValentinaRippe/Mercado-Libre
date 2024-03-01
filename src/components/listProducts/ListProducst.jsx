import PropTypes from "prop-types";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { CardProduct } from "../cardProduct/CardProduct";

export const ListProducts = ({ searchText = "" }) => {
  const { products, isLoading } = useFetchProducts(searchText);

  return (
    <>
      {isLoading && "cargando..."}

      <div>
        {products.length > 0
          ? products.map((item) => <CardProduct key={item.id} item={item} />)
          : "No Products Found"}
      </div>
    </>
  );
};

ListProducts.propTypes = {
  searchText: PropTypes.string.isRequired,
};
