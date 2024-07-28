import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { retrieveActivities } from "../../redux/actions";

import styles from "../smartbar/Smart.module.css";

function Filter() {
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(retrieveActivities());
  }, [dispatch]);

  const handleActivityChange = (event) => {
    const selectedOption = event.target.value;
    console.log("activity", selectedOption);
    // dispatch(clearFilters());
    // dispatch(applyFilters("activity", selectedOption));
  };

  const handleContinentChange = (event) => {
    const selectedOption = event.target.value;
    console.log("continet", selectedOption);
    // dispatch(applyFilters("continent", selectedOption));
  };

  return (
    <div className={styles.filter}>
      <select
        className={styles.selectFilter}
        name="act"
        id="act"
        onChange={handleActivityChange}
      >
        <option value="">Filrar por actividad</option>
        {activity.map((act) => (
          <option key={act.id} value={act.id}>
            {act.name}
          </option>
        ))}
      </select>

      <select
        className={styles.selectFilter}
        name="continent"
        id="continent"
        onChange={handleContinentChange}
      >
        <option value="">Filtrar por continente </option>
        <option value="All">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
