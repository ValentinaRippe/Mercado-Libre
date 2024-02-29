export const getSearchProducts = async (searchText = "") => {
  const url = `http://localhost:4000/api/items?q=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
