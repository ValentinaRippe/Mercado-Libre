import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import "./Detail.scss";
export const Detail = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProduct(id);
  const [viewMore, setViewMore] = useState(false);
  console.log(product);
  return (
    <div className="detail">
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {product.item ? (
        <div className="container-detail">
          <section className="detail-item">
            <div className="detail-picture">
              <img src={product.item.picture} alt="" />
            </div>
            <div className="detail-info">
              <p>
                {product.item.condition} -
                {product.item.sold_quantity} vendidos
              </p>
              <h2>{product.item.title}</h2>
              <h1 className="detail-price">
                ${product.item.price.amount}
                <small>{product.item.price.decimals}</small>
              </h1>
            </div>
          </section>
          <section className="detail-description">
            <h2>Descripción del producto</h2>
            <p className={viewMore ? "" : "view-more"}>
              {product.item.description}
            </p>
            <small onClick={() => setViewMore(!viewMore)}>
              {viewMore ? "ver menos..." : "ver mas..."}
            </small>
          </section>
        </div>
      ) : null}
    </div>
  );
};
