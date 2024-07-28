import PropTypes from "prop-types";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo({ onClick }) {
  return (
    <a href="/inicio" onClick={onClick}>
      <img src={logo} alt="CountryExplorer logo" className={styles.logo} />
    </a>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Logo;
