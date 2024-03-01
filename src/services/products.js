export const getSearchProducts = async (searchText = "") => {
  const url = `https://mercado-libre-back-1.onrender.com/api/items?q=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
