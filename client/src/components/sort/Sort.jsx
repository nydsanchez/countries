import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { sortCountries } from "../redux/actions";

import Btn from "../button/Buttons";
import styles from "../smartbar/Smart.module.css";

function Sort() {
  //const dispatch = useDispatch();

  const [nameSortOrder, setNameSortOrder] = useState("asc");
  const [populationSortOrder, setPopulationSortOrder] = useState("asc");

  const handleNameSort = () => {
    const newOrder = nameSortOrder === "asc" ? "desc" : "asc";
    setNameSortOrder(newOrder);
    // dispatch(sortCountries("name", nameSortOrder));
  };
  const handlePopulationSort = () => {
    const newOrderPopulation = populationSortOrder === "asc" ? "desc" : "asc";
    setPopulationSortOrder(newOrderPopulation);
    // dispatch(sortCountries("population", populationSortOrder));
  };

  return (
    <div className={styles.order}>
      <Btn onClick={handleNameSort}>
        Countries {nameSortOrder === "asc" ? "⬆" : "⬇"}
      </Btn>
      <Btn onClick={handlePopulationSort}>
        Population {populationSortOrder === "asc" ? "⬆" : "⬇"}
      </Btn>
    </div>
  );
}

export default Sort;
