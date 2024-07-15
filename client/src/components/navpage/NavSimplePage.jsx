import { useLocation } from "react-router-dom";
import Search from "../Search";
import Band from "../SmartBar/Band";

import styles from "../SmartBar/Smart.module.css";

function NavSimplePage() {
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();
  return (
    <div className={styles.band}>
      <Band>{title}</Band>
      <Search />
    </div>
  );
}

export default NavSimplePage;
