import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../../styles/CountryDetail.module.css";
import menu from "../../assets/MENU.svg";
import AsideMenu from "../sideMenu/AsideMenu";

function TouristActivities({ country }) {
  const [isOpen, setIsOpen] = useState();

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
      <section>
        <h3>Actividades turisticas</h3>
      </section>
    </div>
  );
}

TouristActivities.propTypes = {
  country: PropTypes.object.isRequired,
};

export default TouristActivities;
