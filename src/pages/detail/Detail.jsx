import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { NotFound } from "../../components/NotFound/NotFound";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { formatNumber } from "../../utils/formatPrice";
import "./Detail.scss";

export const Detail = () => {
  const { id } = useParams();
  const { product, isLoading } = useFetchProduct(id);
  const [viewMore, setViewMore] = useState(false);
  const [showViewMore, setShowViewMore] = useState(false);
  const ref = useRef(null);
  const decimals = product?.item?.price.decimals
    .toString()
    .split(".");

  const handdlerViewMore = () => {
    setViewMore(!viewMore);
    setShowViewMore(true);
  };

  useEffect(() => {
    if (ref.current) {
      setShowViewMore(
        ref.current.scrollHeight !==
          ref.current.clientHeight
      );
    }
  });

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
                {product.item.condition === "new"
                  ? "nuevo"
                  : product.item.condition}{" "}
                - {product.item.sold_quantity} vendidos
              </p>
              <h2>{product.item.title}</h2>
              <h1 className="detail-price">
                <span>$</span>
                {formatNumber(product.item.price.amount)}
                <small>
                  {decimals.lenght > 0
                    ? decimals[1]
                    : decimals[0] + "0"}
                </small>
              </h1>
              <button className="btn-buy">Comprar</button>
            </div>
          </section>
          {product.item.description && (
            <section className="detail-description">
              <h2>Descripción del producto</h2>
              <p
                ref={ref}
                className={viewMore ? "" : "view-more"}
              >
                {product.item.description}
              </p>
              {showViewMore && (
                <small onClick={handdlerViewMore}>
                  {viewMore ? "ver menos..." : "ver mas..."}
                </small>
              )}
            </section>
          )}
        </div>
      ) : (
        !isLoading && <NotFound />
      )}
    </div>
  );
};
