import { useLocation } from "react-router-dom";
import { useState } from "react";

import Band from "./Band";
import Search from "../search/Search";
import FilterAndSorting from "../sideMenu/FilterAndSorting";
import Accordion from "../accordion/Accordion";
//import Filter from "../Filter";
import Sort from "../sort/Sort";
import styles from "./Smart.module.css";
//import { TbAdjustmentsHorizontal } from "react-icons/tb";

const data = ["Americas", "Asia", "Africa", "Antarctic", "Europe", "Oceania"];

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
        <Accordion data={data} title="Continent" />{" "}
        <Accordion data={data} title="Activity" />
        <Sort />
      </div>
      {/* <Btn onClick={handleToggleFilter}>
          <TbAdjustmentsHorizontal /> Filtro
        </Btn>{" "}
        
     
      {isOpen && (
        <div>
          <FilterAndSorting onClose={handleCloseModal} />
        </div>
      )}<Filter /> */}
    </div>
  );
}

export default SmartOp;
