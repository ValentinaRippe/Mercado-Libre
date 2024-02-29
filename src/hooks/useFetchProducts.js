/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getSearchProducts } from "../services/products";

export const useFetchProducts = (searchText) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const res = await getSearchProducts(searchText);
    if (res) {
      setProducts(res.items);
      setIsLoading(false);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isLoading,
  };
};
