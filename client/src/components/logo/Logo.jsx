import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <Link to="/home">
      <img src={logo} alt="CountryExplorer logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
