import AccordionItem from "./AccordionItem";
import ico from "../../utils/ico";
import PropTypes from "prop-types";
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
      <div className={`${styles.content_box} ${styles[title]}`}>
        {isOpen &&
          country.map((elemente, index) => (
            <AccordionItem
              content={elemente}
              title={title}
              id={index}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  country: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Accordion;
