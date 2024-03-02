import { useSearchParams } from "react-router-dom";
import { ListProducts } from "../../components/ListProducts/ListProducts";
import "./Search.scss";

export const Search = () => {
  const [searchParams] = useSearchParams();

  return (
    <ListProducts param={searchParams.get("search")} />
  );
};
