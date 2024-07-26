import AccordionItem from "./AccordionItem";
import ico from "../../utils/ico";
//import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./accordion.module.css";

function Accordion({ country, title }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.title} ${styles[title]}`}
        onClick={handleToggle}
      >
        <img src={ico(title)} alt={`${title} icon`} />
        <h3>{title}</h3>
        <span className={styles.icon}>{isOpen ? " -" : " +"}</span>
      </div>

      {isOpen &&
        country.map((elemente, index) => (
          <AccordionItem content={elemente} id={index} key={index} />
        ))}
    </div>
  );
}

// Accordion.propTypes = {
//   country: PropTypes.obj.isRequired,
//   title: PropTypes.string.isRequired,
// };

/*  ACCORDION CHATGPT

import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Accordion.module.css";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={`${styles.accordionTitle} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
} */

/* COUNTRY
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { retrieveCountries } from "../../redux/actions";

import Pagination from "../pagination/Pagination";
import CountryItem from "../countryitem/CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(countries.length / recordsPerPage)}
        onPageChange={setCurrentPage}
      />
      <ul className={styles.countryList}>
        {currentRecords.map((country, index) => (
          <CountryItem country={country} key={index} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;

*/

// Accordion.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       content: PropTypes.node.isRequired,
//     })
//   ).isRequired,
// };

export default Accordion;
