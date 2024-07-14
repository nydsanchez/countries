import { Link } from "react-router-dom";

import Header from "../components/navpage/HeaderLanding";
import styles from "../styles/Landingpage.module.css";

function Landingpage() {
  return (
    <main className={styles.homepage}>
      <Header />
      <section>
        <h1>
          Share and Discover Activities Worldwide
          <br /> with CountryExplore
        </h1>
        <h2>
          CountryExplorer help fellow travelers discover what to do and when in
          every corner of the globe. <br />
          Whether you&apos;re planning your next destination or seeking
          inspiration for your next adventure, CountryExplorer is the perfect{" "}
          <br /> platform to connect and explore
        </h2>
        <Link to="/home" className="cta">
          Start Now
        </Link>
      </section>
    </main>
  );
}

export default Landingpage;
