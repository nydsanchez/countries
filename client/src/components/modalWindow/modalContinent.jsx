import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { applyFilter, resetFilter } from "../../redux/actions";
import { continent } from "../../utils/continent";
import { BsChevronUp } from "react-icons/bs";
import styles from "./modalPrueba.module.css";

function ModalContinent({ onClose }) {
  const dispatch = useDispatch();
  const selectedContinent = useSelector((state) => state.filters.continent);
  const [localContinent, setLocalContinent] = useState(selectedContinent);

  const resetContinent = "";

  useEffect(() => {
    setLocalContinent(selectedContinent);
  }, [selectedContinent]);

  const handleContinentChange = (e) => {
    const { value } = e.target;

    if (localContinent === value || value === "All") {
      setLocalContinent("");
      dispatch(resetFilter("continent", resetContinent));
    } else {
      setLocalContinent(value);
      dispatch(applyFilter("continent", value));
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <button className={styles.closeButton} onClick={onClose}>
        <BsChevronUp className={styles.img_filter} />
      </button>

      <div className={styles.modal}>
        <ul className={styles.list}>
          {continent.map((item, index) => (
            <li key={index}>
              <div className={styles.list_item}>
                <div>
                  <input
                    type="radio"
                    id={item}
                    name="continent"
                    value={item}
                    onChange={handleContinentChange}
                    checked={localContinent === item}
                    className={styles.input__filter}
                  />
                  <label htmlFor={item} className={styles.label__filter}>
                    {item}
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
ModalContinent.propTypes = {
  onClose: propTypes.func.isRequired,
};

export default ModalContinent;
