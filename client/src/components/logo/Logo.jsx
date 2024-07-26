import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo({ onClick }) {
  return (
    <a href="/home" onClick={onClick}>
      <img src={logo} alt="CountryExplorer logo" className={styles.logo} />
    </a>
  );
}

export default Logo;
