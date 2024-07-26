import styles from "../styles/Homepage.module.css";
import NavPage from "../components/navpage/NavPage";
import SmartOp from "../components/smartbar/SmartOp";

import CountryList from "../components/countrylist/CountryList";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <header>
        <NavPage />
        <SmartOp />
      </header>
      <main>
        <CountryList />
      </main>
    </div>
  );
}

export default Homepage;
