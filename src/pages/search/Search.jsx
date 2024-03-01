import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ListProducts } from "../../components/listProducts/ListProducst";
import { Searcher } from "../../components/searcher/Searcher";
import "./Search.scss";

export const Search = () => {
  const { search } = useLocation();
  const [searchParams, setSearhParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");

  const onSearchValueChange = (e) => {
    setSearchText(e);
  };

  useEffect(() => {}, [searchText]);
  return (
    <>
      <div>
        <Searcher onSearchValueChange={onSearchValueChange} />
      </div>
      <ListProducts searchText={searchText} />
    </>
  );
};
