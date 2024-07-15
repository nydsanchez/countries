import PropTypes from "prop-types";

import Logo from "../logo/Logo";
import GeneralInformation from "./GeneralInformation";
import styles from "./styleCountryDetailComponent.module.css";

function CountryDetail({ country }) {
  return (
    <aside className={styles.sidebar}>
      <Logo />

      <div className={styles.flag}>
        <img src={country.flag} alt={`flag of ${country.name}`} />
        <h2>{country.id}</h2>
      </div>
      <GeneralInformation />
    </aside>
  );
}

CountryDetail.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryDetail;

/*

        <Footer />*/
