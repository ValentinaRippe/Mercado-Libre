import { useEffect, useState } from "react";
import { getProductById } from "../services/products";

export const useFetchProduct = (id) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getProduct = async () => {
        setProduct({});
        setIsLoading(true);
        const res = await getProductById(id);
        try {
            setProduct(res);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log("Error");
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    return {
        product,
        isLoading,
    };
};
