import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clearData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Logo from "../logo/Logo";
import styles from "./nav.module.css";

function PageNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Evita la navegación por defecto
    dispatch(clearData());
    navigate("/home");
  };

  return (
    <nav className={styles.nav}>
      <Logo onClick={handleClick} />
      <ul>
        <li>
          <NavLink to="/home">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/activity">Activitidad</NavLink>
        </li>
        <li>
          <NavLink to="/about">Acerca de</NavLink>
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

export default PageNav;
