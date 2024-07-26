import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCountries,
  deselectedValue,
  retrieveCountries,
} from "../../redux/actions";
import styles from "./MultiSelect.module.css";
import { useEffect } from "react";

const MultiSelect = () => {
  const dispatch = useDispatch();
  const selectedValues = useSelector(
    (state) => state.country.selectedCountries
  );
  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "") return;
    if (selectedValues.includes(value)) {
      dispatch(deselectedValue(value));
    } else {
      dispatch(setSelectedCountries(value));
    }
  };

  return (
    <div className={styles.multiselect}>
      <select onChange={handleSelectChange}>
        <option value="">Selecciona un país</option>
        {countries.map((country, index) => (
          <option key={index} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;
