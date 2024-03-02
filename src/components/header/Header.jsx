import { useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Searcher } from "../searcher/Searcher";
import "./Header.scss";
export const Header = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [param, setParam] = useState(
    searchParams.get("search")
  );

  const onSearchValueChange = (e) => {
    navigate("/items");
    setSearchParams({
      search: e,
    });
    setParam(e);
  };

  const removeParam = () => {
    setParam("");
    searchParams.delete("search");
  };
  return (
    <nav className="nav">
      <Link to="/" className="logo" onClick={removeParam}>
        <img src={logo} alt="logo" />
      </Link>
      <Searcher onSearchValueChange={onSearchValueChange} />
    </nav>
  );
};
