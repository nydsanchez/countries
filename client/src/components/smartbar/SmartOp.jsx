import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import Search from "../search/Search";
import Band from "./Band";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import styles from "./Smart.module.css";
import Btn from "../button/Buttons";
//import Filter from "../Filter";
//import Sort from "../Sort";

function SmartOp({ onViewClick }) {
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();

  return (
    <div className={styles.band}>
      <Band>{title}</Band>

      <div className={styles.options}>
        <Search />

        <Btn onClick={onViewClick}>
          <TbAdjustmentsHorizontal /> Filtro
        </Btn>
      </div>

      {/* <Sort />
      <Filter /> */}
    </div>
  );
}
SmartOp.propTypes = {
  onViewClick: PropTypes.func.isRequired,
};

export default SmartOp;
