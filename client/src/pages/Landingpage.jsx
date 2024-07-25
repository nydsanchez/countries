import { Link } from "react-router-dom";

import styles from "../styles/Landingpage.module.css";
import Logo from "../components/logo/Logo";

function Landingpage() {
  return (
    <div className={styles.container_landingpage}>
      <Logo />
      <section>
        <h1>
          Comparte y descubre actividades en todo el mundo
          <br /> con CountryExplore
        </h1>
        <h2>
          CountryExplorer ayuda a otros viajeros a descubrir qué hacer y cuándo
          en cada rincón del mundo. <br />
          Ya sea que estés planeando tu próximo destino o buscando inspiración
          para tu próxima aventura,
          <br />
          CountryExplorer es la plataforma perfecta para conectarte y explorar
        </h2>
        <Link to="/home" className="cta">
          Empieza ahora!
        </Link>
      </section>
    </div>
  );
}

export default Landingpage;
