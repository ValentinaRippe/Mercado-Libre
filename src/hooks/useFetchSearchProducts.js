import { useEffect, useState } from "react";
import { getSearchProducts } from "../services/products";

export const useFetchSearchProducts = (searchText) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setProducts([]);
    setIsLoading(true);
    try {
      const res = await getSearchProducts(searchText);
      setProducts(res.items);
      setCategories(res.categories)
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log("Error");
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchText]);

  return {
    products,
    categories,
    isLoading,
  };
};
