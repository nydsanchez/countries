import styles from "../styles/Homepage.module.css";
import NavPage from "../components/navpage/NavPage";
import SmartOp from "../components/SmartBar/Smart";
import CountryList from "../components/CountryList";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <NavPage />
      <SmartOp />
      <CountryList />
    </main>
  );
}

export default Homepage;
