import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";
import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(search(name));
  };
  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        type="search"
        value={name}
        onChange={handleChange}
        placeholder="Find by Country"
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Search;
