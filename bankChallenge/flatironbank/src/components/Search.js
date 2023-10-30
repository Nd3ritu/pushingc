import { useState } from "react";

function Search({ handleSearch }) {
  const [searchData, setSearchData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function submitData(e) {
    e.preventDefault();
    handleSearch(searchData);
  }

  function handleData(e) {
    setSearchData({ [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={submitData}>
      <input
        type="date"
        value={searchData.date}
        name="date"
        onChange={handleData}
      />
      <input
        type="data"
        value={searchData.description}
        name="description"
        onChange={handleData}
      />
      <input
        type="data"
        value={searchData.category}
        name="category"
        onChange={handleData}
      />
      <input
        type="number"
        value={searchData.amount}
        name="amount"
        onChange={handleData}
      />
      <input className="search" type="submit" value="Search" />
    </form>
  );
}

export default Search;
