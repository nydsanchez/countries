import { useLocation } from "react-router-dom";
import Search from "../search/Search";
import Band from "./Band";

import styles from "./Smart.module.css";

function SimpleOp() {
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();
  return (
    <div className={styles.band}>
      <Band>{title}</Band>
      <Search />
    </div>
  );
}

export default SimpleOp;
