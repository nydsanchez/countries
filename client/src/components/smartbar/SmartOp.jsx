import { useLocation } from "react-router-dom";
import { useState } from "react";

import Band from "./Band";
import Btn from "../button/Buttons";
import Search from "../search/Search";
import FilterAndSorting from "../sideMenu/FilterAndSorting";
//import Filter from "../Filter";
//import Sort from "../Sort";
import styles from "./Smart.module.css";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

function SmartOp() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();

  const handleToggleFilter = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.band}>
      <Band>{title}</Band>

      <div className={styles.options}>
        <Search />

        <Btn onClick={handleToggleFilter}>
          <TbAdjustmentsHorizontal /> Filtro
        </Btn>
      </div>
      {isOpen && (
        <div>
          <FilterAndSorting onClose={handleCloseModal} />
        </div>
      )}
      {/* <Sort />
      <Filter /> */}
    </div>
  );
}

export default SmartOp;
