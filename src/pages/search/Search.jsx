import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export const Search = () => {
  const [searcParams] = useSearchParams();
  const { products, isLoading } = useFetchProducts("");

  useEffect(() => {
    console.log(searcParams.entries());
  });
  return (
    <>
      <div>Search</div>
      {isLoading ? "cargando..." : null}
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
