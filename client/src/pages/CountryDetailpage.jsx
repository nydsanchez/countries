import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/CountryDetail.module.css";
import Footer from "../components/gralInfo/footer";
import Logo from "../components/Logo";

function CountryDetailpage() {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getCountryById = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/country/${id}`);
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    getCountryById();
    return () => setCountry({});
  }, [id]);

  return (
    <div className={styles.gridContainer}>
      <aside className={styles.sidebar}>
        <Logo />
        {console.log(country)}
        <div className={styles.flag}>
          <img src={country.flag} alt={`flag of ${country.name}`} />
          <h2>{country.id}</h2>
        </div>
        <Footer />
      </aside>
      <main className={styles.actCountries}>
        <section>
          <h2>{country.name}</h2>
          <button className={styles.btnMenu}>
            <img src="/MENU.svg" alt="menu" role="menu" />
          </button>
          <p>Tourist activities registred</p>
        </section>
      </main>
    </div>
  );
}

export default CountryDetailpage;
