import styles from "../styles/Pagenotfound.module.css";

import { BsRocket } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import NavPage from "../components/navpage/NavPage";

import SimpleOp from "../components/smartbar/SimpleOp";
import Footer from "../components/footer/Footer";
import image404 from "../assets/404.svg";

function PageNotFound() {
  return (
    <div className={styles.NotFoundPage}>
      <header>
        <NavPage />
        <SimpleOp />
      </header>
      <main className={styles.main404}>
        <img src={image404} alt="code 404 not found" />
        <p className={styles.pageNotFound}>
          Ups, parece que estás perdido en el espacio
        </p>

        <NavLink to="/home" className={styles.ctaLink}>
          <BsRocket /> INICIO
        </NavLink>
      </main>
      <Footer />
    </div>
  );
}

export default PageNotFound;
