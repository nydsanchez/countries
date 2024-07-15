import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCountry } from "../redux/actions";
import { Detail } from "../components/countrydetail/CountryDetail";
import styles from "../styles/CountryDetail.module.css";

//import Footer from "../components/gralInfo/footer";

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
      <Detail country={country} />

      <main className={styles.actCountries}>
        <section>
          <h2>{country.name}</h2>
          <button className={styles.btnMenu}>
            <img src="/MENU.svg" alt="menu" role="menu" />
          </button>
          <p>Tourist activities registred</p>
          <TouristActivities country={country} />
        </section>
      </main>
    </div>
  );
}

export default CountryDetailpage;
