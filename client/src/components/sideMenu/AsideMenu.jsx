import { NavLink } from "react-router-dom";

import styles from "./filterandsorting.module.css";
import menu__exit from "../../assets/XMenu.svg";
function AsideMenu({ onClose }) {
  return (
    <nav className={styles.modalOverlay}>
      <button className={styles.btnMenu} onClick={onClose}>
        <img src={menu__exit} alt="menu" role="menu" />
      </button>
      <ul className={styles.nav_menu}>
        <li>
          <NavLink to="/home">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/activity">Actividades</NavLink>
        </li>
        <li>
          <NavLink to="/about">Acerca de</NavLink>
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

export default AsideMenu;
