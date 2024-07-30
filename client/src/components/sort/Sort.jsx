import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortData } from "../../redux/actions";

import Btn from "../button/Buttons";
import styles from "../smartbar/Smart.module.css";

function Sort() {
  const dispatch = useDispatch();

  const [nameSortOrder, setNameSortOrder] = useState("asc");
  const [populationSortOrder, setPopulationSortOrder] = useState("asc");

  const handleNameSort = () => {
    const newOrder = nameSortOrder === "asc" ? "desc" : "asc";
    setNameSortOrder(newOrder);
    dispatch(sortData("country", nameSortOrder));
  };
  const handlePopulationSort = () => {
    const newOrderPopulation = populationSortOrder === "asc" ? "desc" : "asc";
    setPopulationSortOrder(newOrderPopulation);
    dispatch(sortData("population", populationSortOrder));
  };

  return (
    <div className={styles.order}>
      <Btn onClick={handleNameSort}>
        Países {nameSortOrder === "asc" ? "⬆" : "⬇"}
      </Btn>
      <Btn onClick={handlePopulationSort}>
        Poblacion {populationSortOrder === "asc" ? "⬆" : "⬇"}
      </Btn>
    </div>
  );
}

export default Sort;
