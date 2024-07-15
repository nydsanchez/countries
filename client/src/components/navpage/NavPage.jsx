import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./nav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/activity">Activity</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/" className={styles.ctaLink}>
            Exit
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
