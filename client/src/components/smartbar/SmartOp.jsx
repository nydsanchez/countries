import { useLocation } from "react-router-dom";

import Band from "./Band";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import Filters from "./Filters";
import styles from "./Smart.module.css";

function SmartOp() {
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();

  return (
    <div className={styles.band}>
      <Band>{title}</Band>

      <div className={styles.options}>
        <Search />
        <Filters />
        <Sort />
      </div>
    </div>
  );
}

export default SmartOp;
