import { GoArrowUpLeft } from "react-icons/go";

import styles from "./form.module.css";

function ActivityForm() {
  return (
    <div className={styles.form}>
      <h2>New activity</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div>
            <label htmlFor="name">Activity:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty (1 to 5): </label>
            <span className={styles.difficulty}>no</span>
            <input type="range" id="difficulty" name="difficulty" step="1" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.duration}>
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.season}>
            <p className={styles.season__title}> Season:</p>

            <div>
              <label htmlFor="winter">Winter</label>
              <input type="checkbox" name="season" id="winter" />

              <label htmlFor="summer">Summer</label>
              <input type="checkbox" name="season" id="summer" />
            </div>

            <div>
              <label htmlFor="spring">Spring</label>
              <input type="checkbox" name="season" id="spring" />

              <label htmlFor="autumn">Autumn</label>
              <input type="checkbox" name="season" id="autumn" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.selectCountries}>
            <button type="button">
              <GoArrowUpLeft /> Choose/remove a country
            </button>
          </div>
        </div>
        {isCountryListVisible && (
          <div className={styles.countryListContainer}>
            <ModalCountry onClose={handleCloseModal} />
          </div>
        )}
        <div className={styles.section}>
          <label htmlFor="countries" className={styles.labelsection}>
            Selected Countries:
          </label>
          <textarea
            id="countries"
            name="countries"
            value={selectedCountries.join(", ")}
            readOnly
          />
          {errors.countries && (
            <p className={styles.error}>{errors.countries}</p>
          )}
        </div>
        <div className={styles.Buttons}>
          <button type="submit" className={styles.ButtonsMain}>
            Save
          </button>
          <button className={styles.ButtonsSec} onClick={handleClean}>
            Clean
          </button>
        </div>
      </form>
    </div>
  );
}
ActivityForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ActivityForm;

/*import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, postActivities } from "../../redux/actions";
import { GoArrowUpLeft } from "react-icons/go";
import styles from "./form.module.css";
import ModalCountry from "./modalCountry";
import validation from "../../utilities/validation";

function ActivityForm({ onClose }) {
  const dispatch = useDispatch();

  // State local del componente
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryListVisible, setIsCountryListVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });
  const [errors, setErrors] = useState({});

  // Estados globales de Redux
  const selectedCountries = useSelector((state) => state.countries.selectedCountries);
  const ERROR = useSelector((state) => state.error);

  // Efecto para actualizar formData y errores cuando cambian los países seleccionados
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      countries: selectedCountries,
    }));

    setErrors(validation({ ...formData, countries: selectedCountries }));
  }, [selectedCountries]);

  // Efecto para mostrar mensajes de éxito o error después de enviar el formulario
  useEffect(() => {
    if (isSubmitted) {
      if (ERROR) {
        alert(`Error: ${ERROR}`);
      } else {
        alert("Activity registered successfully!");
      }
      setIsSubmitted(false); // Reinicia el estado de envío después de mostrar el mensaje
    }
  }, [ERROR, isSubmitted]);

  // Función para manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(validation({ ...formData, [name]: value }));
  };

  // Función para manejar cambios en las estaciones seleccionadas
  const handleSeasonChange = (e) => {
    const { id, checked } = e.target;
    const newSeason = checked
      ? [...formData.season, id]
      : formData.season.filter((season) => season !== id);
    setFormData({ ...formData, season: newSeason });
    setErrors(validation({ ...formData, season: newSeason }));
  };

  // Función para manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(postActivities(formData));
      setIsSubmitted(true);
      handleClean();
    }
  };

  // Función para limpiar el formulario
  const handleClean = () => {
    setFormData({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
    dispatch(clearFilters());
    setErrors({});
  };

  // Funciones para manejar la lista de países y el modal
  const handleToggleCountryList = () => {
    setIsCountryListVisible(!isCountryListVisible);
  };

  const handleCloseModal = () => {
    setIsCountryListVisible(false);
  };

  // Renderizado del componente
  return (
    <div className={styles.form}>
      <h2>New activity</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div>
            <label htmlFor="name">Activity:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty (1 to 5): </label>
            <span className={styles.difficulty}>{formData.difficulty}</span>
            <input
              type="range"
              id="difficulty"
              name="difficulty"
              step="1"
              className={styles.inputRange}
              value={formData.difficulty}
              onChange={handleInputChange}
            />
            {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.duration}>
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
            {errors.duration && <p className={styles.error}>{errors.duration}</p>}
          </div>
          <div className={styles.season}>
            <p className={styles.season__title}> Season:</p>
            <div>
              <label htmlFor="winter">Winter</label>
              <input
                type="checkbox"
                name="season"
                id="winter"
                checked={formData.season.includes("winter")}
                onChange={handleSeasonChange}
              />
              <label htmlFor="summer">Summer</label>
              <input
                type="checkbox"
                name="season"
                id="summer"
                checked={formData.season.includes("summer")}
                onChange={handleSeasonChange}
              />
            </div>
            <div>
              <label htmlFor="spring">Spring</label>
              <input
                type="checkbox"
                name="season"
                id="spring"
                checked={formData.season.includes("spring")}
                onChange={handleSeasonChange}
              />
              <label htmlFor="autumn">Autumn</label>
              <input
                type="checkbox"
                name="season"
                id="autumn"
                checked={formData.season.includes("autumn")}
                onChange={handleSeasonChange}
              />
            </div>
            {errors.season && <p className={styles.error}>{errors.season}</p>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.selectCountries}>
            <button type="button" onClick={handleToggleCountryList}>
              <GoArrowUpLeft /> Choose/remove a country
            </button>
          </div>
        </div>
        {isCountryListVisible && (
          <div className={styles.countryListContainer}>
            <ModalCountry onClose={handleCloseModal} />
          </div>
        )}
        <div className={styles.section}>
          <label htmlFor="countries" className={styles.labelsection}>
            Selected Countries:
          </label>
          <textarea
            id="countries"
            name="countries"
            value={selectedCountries.join(", ")}
            readOnly
          />
          {errors.countries && <p className={styles.error}>{errors.countries}</p>}
        </div>
        <div className={styles.Buttons}>
          <button type="submit" className={styles.ButtonsMain}>
            Save
          </button>
          <button className={styles.ButtonsSec} onClick={handleClean}>
            Clean
          </button>
        </div>
      </form>
    </div>
  );
}

ActivityForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ActivityForm;*/

/* VERSION 2 CHATGPT

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, postActivities } from "../../redux/actions";
import { GoArrowUpLeft } from "react-icons/go";
import styles from "./form.module.css";
import ModalCountry from "./modalCountry";
import validation from "../../utilities/validation";

const ActivityForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectedCountries = useSelector((state) => state.countries.selectedCountries);
  const ERROR = useSelector((state) => state.error);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryListVisible, setIsCountryListVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      countries: selectedCountries,
    }));
    setErrors(validation({ ...formData, countries: selectedCountries }));
  }, [selectedCountries]);

  useEffect(() => {
    if (isSubmitted) {
      alert(ERROR ? `Error: ${ERROR}` : "Activity registered successfully!");
      setIsSubmitted(false);
    }
  }, [ERROR, isSubmitted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors(validation({ ...formData, [name]: value }));
  };

  const handleSeasonChange = (e) => {
    const { id, checked } = e.target;
    const newSeason = checked
      ? [...formData.season, id]
      : formData.season.filter((season) => season !== id);
    setFormData((prevState) => ({ ...prevState, season: newSeason }));
    setErrors(validation({ ...formData, season: newSeason }));
  };

  const handleToggleCountryList = () => {
    setIsCountryListVisible(!isCountryListVisible);
  };

  const handleCloseModal = () => {
    setIsCountryListVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(postActivities(formData));
      setIsSubmitted(true);
      handleClean();
    }
  };

  const handleClean = () => {
    setFormData({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
    dispatch(clearFilters());
    setErrors({});
  };

  return (
    <div className={styles.form}>
      <h2>New activity</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div>
            <label htmlFor="name">Activity:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty (1 to 5): </label>
            <span className={styles.difficulty}>{formData.difficulty}</span>
            <input
              type="range"
              id="difficulty"
              name="difficulty"
              step="1"
              className={styles.inputRange}
              value={formData.difficulty}
              onChange={handleInputChange}
            />
            {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.duration}>
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
            {errors.duration && <p className={styles.error}>{errors.duration}</p>}
          </div>
          <div className={styles.season}>
            <p className={styles.season__title}> Season:</p>
            <div>
              <label htmlFor="winter">Winter</label>
              <input
                type="checkbox"
                name="season"
                id="winter"
                checked={formData.season.includes("winter")}
                onChange={handleSeasonChange}
              />
              <label htmlFor="summer">Summer</label>
              <input
                type="checkbox"
                name="season"
                id="summer"
                checked={formData.season.includes("summer")}
                onChange={handleSeasonChange}
              />
            </div>
            <div>
              <label htmlFor="spring">Spring</label>
              <input
                type="checkbox"
                name="season"
                id="spring"
                checked={formData.season.includes("spring")}
                onChange={handleSeasonChange}
              />
              <label htmlFor="autumn">Autumn</label>
              <input
                type="checkbox"
                name="season"
                id="autumn"
                checked={formData.season.includes("autumn")}
                onChange={handleSeasonChange}
              />
            </div>
            {errors.season && <p className={styles.error}>{errors.season}</p>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.selectCountries}>
            <button type="button" onClick={handleToggleCountryList}>
              <GoArrowUpLeft /> Choose/remove a country
            </button>
          </div>
        </div>
        {isCountryListVisible && (
          <div className={styles.countryListContainer}>
            <ModalCountry onClose={handleCloseModal} />
          </div>
        )}
        <div className={styles.section}>
          <label htmlFor="countries" className={styles.labelsection}>
            Selected Countries:
          </label>
          <textarea
            id="countries"
            name="countries"
            value={selectedCountries.join(", ")}
            readOnly
          />
          {errors.countries && <p className={styles.error}>{errors.countries}</p>}
        </div>
        <div className={styles.Buttons}>
          <button type="submit" className={styles.ButtonsMain}>
            Save
          </button>
          <button type="button" className={styles.ButtonsSec} onClick={handleClean}>
            Clean
          </button>
        </div>
      </form>
    </div>
  );
};

ActivityForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ActivityForm;*/
