import styles from "../styles/Pagenotfound.module.css";

import { BsRocket } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import PageNav from "../components/navpage/NavPage";
import Band from "../components/SmartBar/Band";
import Search from "../components/Search";
import Footer from "../components/footer/Footer";

function PageNotFound() {
  return (
    <div className={styles.NotFoundPage}>
      <header>
        <PageNav />
        <Band>Page not found!!</Band>
        <div className={styles.bandSearch}>
          <Search />
        </div>
      </header>
      <main className={styles.main404}>
        <img src="./404.svg" alt="code 404 not found" />
        <p className={styles.pageNotFound}>
          Oops, it seems like you’re lost in space
        </p>

        <NavLink to="/home" className={styles.ctaLink}>
          <BsRocket /> HOME
        </NavLink>
      </main>
      <Footer />
    </div>
  );
}

export default PageNotFound;
