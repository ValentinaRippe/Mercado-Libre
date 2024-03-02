import PropTypes from "prop-types";
import { useState } from "react";
import iconSearch from "../../assets/search.svg";
import "./Searcher.scss";

export const Searcher = ({ onSearchValueChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchValueChange(searchValue.trim());
    setSearchValue("");
  };

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={onInputChange}
      />
      <button type="submit">
        <img src={iconSearch} alt="Buscar" />
      </button>
    </form>
  );
};

Searcher.propTypes = {
  onSearchValueChange: PropTypes.func,
};
