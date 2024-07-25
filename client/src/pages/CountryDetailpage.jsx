import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCountry } from "../redux/actions";
import Detail from "../components/countrydetail/CountryDetail";
import styles from "../styles/CountryDetail.module.css";

import TouristActivities from "../components/countrydetail/TouristActivities";

function CountryDetailpage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.regcountry);

  useEffect(() => {
    dispatch(loadCountry(id));
  }, [id, dispatch]);

  return (
    <div className={styles.gridContainer}>
      <aside className={styles.sidebar}>
        <Detail country={country} />
      </aside>
      <main>
        <h2>soy main</h2>
      </main>
    </div>
  );
}

export default CountryDetailpage;
