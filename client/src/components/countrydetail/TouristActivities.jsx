//import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styles from "../../styles/CountryDetail.module.css";
import menu from "../../assets/MENU.svg";
import AsideMenu from "../sideMenu/AsideMenu";
import Accordion from "../accordion/Accordion";

function TouristActivities({ country }) {
  const [isOpen, setIsOpen] = useState();

  const [summerAct, setSummerAct] = useState([]);
  const [springAct, setSpringAct] = useState([]);
  const [fallAct, setFallAct] = useState([]);
  const [winterAct, setWinterAct] = useState([]);

  useEffect(() => {
    if (country && country.Activities) {
      breakDownActBySeason(country);
    }
  }, [country]);

  const breakDownActBySeason = (country) => {
    const activities = country.Activities;

    const summerActivities = [];
    const springActivities = [];
    const fallActivities = [];
    const winterActivities = [];

    if (activities.length > 0) {
      activities.forEach((act) => {
        act.season.includes("summer")
          ? summerActivities.push(act.name)
          : summerActivities.push("no hay actividades registradas");

        act.season.includes("winter")
          ? winterActivities.push(act.name)
          : winterActivities.push("no hay actividades registradas");

        act.season.includes("spring")
          ? springActivities.push(act.name)
          : springActivities.push("no hay actividades registradas");

        act.season.includes("fall")
          ? fallActivities.push(act.name)
          : fallActivities.push("no hay actividades registradas");
      });
    } else {
      summerActivities.push("no hay actividades registradas");
      springActivities.push("no hay actividades registradas");
      fallActivities.push("no hay actividades registradas");
      winterActivities.push("no hay actividades registradas");
    }
    setSummerAct(summerActivities);
    setSpringAct(springActivities);
    setFallAct(fallActivities);
    setWinterAct(winterActivities);
  };

  const handleToggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.actCountries}>
      <header>
        <h2>{country.name}</h2>
        <button className={styles.btnMenu} onClick={handleToggleFilter}>
          <img src={menu} alt="menu" role="menu" />
        </button>
        {isOpen && (
          <div>
            <AsideMenu onClose={handleCloseModal} />
          </div>
        )}
      </header>
      <div className={styles.accordionSection}>
        <h3>Actividades turisticas</h3>
        <Accordion country={summerAct} title="Verano" />
        <Accordion country={fallAct} title="Otono" />
        <Accordion country={springAct} title="Primavera" />
        <Accordion country={winterAct} title="Invierno" />
      </div>
    </div>
  );
}

export default TouristActivities;
