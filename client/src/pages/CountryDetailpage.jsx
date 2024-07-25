import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCountry } from "../redux/actions";
import Detail from "../components/countrydetail/CountryDetail";
import GeneralInformation from "../components/countrydetail/GeneralInformation";
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
        <TouristActivities country={country} />
      </main>
      <footer>
        <GeneralInformation />
      </footer>
    </div>
  );
}

export default CountryDetailpage;
