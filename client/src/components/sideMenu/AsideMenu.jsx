import propTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { clearData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./filterandsorting.module.css";
import menu__exit from "../../assets/XMenu.svg";
function AsideMenu({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Evita la navegación por defecto
    dispatch(clearData());
    navigate("/inicio");
  };

  return (
    <nav className={styles.modalOverlay}>
      <button className={styles.btnMenu} onClick={onClose}>
        <img src={menu__exit} alt="menu" role="menu" />
      </button>
      <ul className={styles.nav_menu}>
        <li>
          <a href="/inicio" onClick={handleClick}>
            Inicio
          </a>
        </li>
        <li>
          <NavLink to="/actividad">Actividades</NavLink>
        </li>
        <li>
          <NavLink to="/acerca">Acerca de</NavLink>
        </li>
        <li>
          <NavLink to="/inicio">Atras</NavLink>
        </li>

        <li>
          <NavLink to="/" className={styles.ctaLink}>
            Salir
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
AsideMenu.propTypes = {
  onClose: propTypes.func.isRequired,
};
export default AsideMenu;
