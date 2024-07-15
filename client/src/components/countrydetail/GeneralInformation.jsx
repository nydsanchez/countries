import { BsArrowUpRightCircle } from "react-icons/bs";
import styles from "../../styles/CountryDetail.module.css";

function GeneralInformation() {
  return (
    <button className={styles.bottomContainer}>
      <h2> General information</h2>
      <BsArrowUpRightCircle className={styles.ico} />
    </button>
  );
}

export default GeneralInformation;
