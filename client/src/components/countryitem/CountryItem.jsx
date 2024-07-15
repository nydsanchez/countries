import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { id, name, flag, continent } = country;
  return (
    <Link to={`/country/${id}`}>
      <li className={styles.countryItem}>
        <img
          className={styles.countryFlag}
          src={flag}
          alt={`flag of ${name}`}
        />
        <span className={styles.countryName}>{name}</span>
        <span className={styles.continent}>{continent}</span>
      </li>
    </Link>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
