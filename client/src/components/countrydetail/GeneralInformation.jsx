import { BsArrowUpRightCircle } from "react-icons/bs";
import styles from "./CountryDetailComponent.module.css";

function GeneralInformation() {
  return (
    <button className={styles.bottomContainer}>
      <h2> Informacion General</h2>
      <BsArrowUpRightCircle className={styles.ico} />
    </button>
  );
}

export default GeneralInformation;
