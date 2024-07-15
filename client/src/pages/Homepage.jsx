import styles from "../styles/Homepage.module.css";
import NavPage from "../components/navpage/NavPage";
import SmartOp from "../components/smartbar/SmartOp";
import Footer from "../components/footer/Footer";
import FilterAndSorting from "../components/sideMenu/FilterAndSorting";
//import CountryList from "../components/CountryList";

function Homepage() {
  const handleShowTable = () => {
    console.log("nada psa");
  };
  return (
    <div className={styles.homepage}>
      <header>
        <NavPage />
        <SmartOp onViewClick={handleShowTable} />
      </header>
      <main>{/* <CountryList /> */}AQUI ESTARAN LOS PAISES</main>
      <Footer />
      <FilterAndSorting />
    </div>
  );
}

export default Homepage;
