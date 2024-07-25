//import PropTypes from "prop-types";

import Logo from "../logo/Logo";
import styles from "./CountryDetailComponent.module.css";

function CountryDetail({ country }) {
  return (
    <div className={styles.container_detail}>
      <Logo />

      <div className={styles.flag}>
        <img src={country.flag} alt={`flag of ${country.name}`} />
        <h2>{country.id}</h2>
      </div>
    </div>
  );
}

// CountryDetail.propTypes = {
//   country: PropTypes.object.isRequired,
// };

export default CountryDetail;
