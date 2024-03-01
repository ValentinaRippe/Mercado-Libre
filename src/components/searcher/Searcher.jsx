import PropTypes from "prop-types";
import { useState } from "react";

export const Searcher = ({ onSearchValueChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim().length <= 1) return;
    onSearchValueChange(searchValue.trim());
    setSearchValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar..." value={searchValue} onChange={onInputChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

Searcher.propTypes = {
  onSearchValueChange: PropTypes.func,
};
