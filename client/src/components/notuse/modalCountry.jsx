import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, setSelectedCountries } from "../../redux/actions";

import styles from "./modal.module.css";
import Search from "../Search";

function ModalCountry({ onClose }) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.country);
  const selectedCountries = useSelector(
    (state) => state.countries.selectedCountries
  );

  const [isChecked, setIsChecked] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);

    const updatedSelectedCountries = updatedCheckedState
      .map((checked, index) => (checked ? countries[index].id : null))
      .filter((id) => id !== null);
    dispatch(setSelectedCountries(updatedSelectedCountries)); // Actualizar el estado global
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries.length) {
      const initialCheckedState = countries.map((country) =>
        selectedCountries.includes(country.id)
      );
      setIsChecked(initialCheckedState);
    }
  }, [countries, selectedCountries]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.closeButton}>
        <button onClick={onClose}>X</button>
      </div>{" "}
      <div className={styles.modal}>
        <ul className={styles.country_list}>
          <div className={styles.searchCountry}>
            <Search />
          </div>

          {countries.map(({ id, name }, index) => {
            return (
              <li key={id}>
                <div className={styles.countryListItem}>
                  <div>
                    <input
                      type="checkbox"
                      id={id}
                      name="country"
                      value={id}
                      checked={isChecked[index] || false}
                      onChange={() => handleOnChange(index, id)}
                    />
                    <label htmlFor={id}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>{" "}
    </div>
  );
}

export default ModalCountry;
