import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createActivity } from "../../redux/actions";
import MultiSelect from "../select/Multiselect";
import validation from "../../utils/validation";

import styles from "./form.module.css";

function ActivityForm({ onClose }) {
  const dispatch = useDispatch();

  // Estados globales de Redux
  const selectedCountries = useSelector(
    (state) => state.country.selectedCountries
  );
  const ERROR = useSelector((state) => state.error);

  // State local del componente
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });
  const [errors, setErrors] = useState({});

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
      alert(ERROR ? `Error: ${ERROR}` : "Activity registered successfully!");
      setIsSubmitted(false);
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
      dispatch(createActivity(formData));
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

    setErrors({});
  };

  return (
    <div className={styles.form}>
      <h2>Nueva Actividad Turistica</h2>
      <button onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.section}>
          <div>
            <label htmlFor="name">Actividad:</label>
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
            <label htmlFor="difficulty">Dificultad (1 to 5): </label>
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
            {errors.difficulty && (
              <p className={styles.error}>{errors.difficulty}</p>
            )}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.duration}>
            <label htmlFor="duration">Duración en horas:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
            {errors.duration && (
              <p className={styles.error}>{errors.duration}</p>
            )}
          </div>
          <div className={styles.season}>
            <p className={styles.season__title}>Temporada:</p>

            <div>
              <label htmlFor="winter">Invierno</label>
              <input
                type="checkbox"
                name="season"
                id="winter"
                checked={formData.season.includes("winter")}
                onChange={handleSeasonChange}
              />

              <label htmlFor="summer">Verano</label>
              <input
                type="checkbox"
                name="season"
                id="summer"
                checked={formData.season.includes("summer")}
                onChange={handleSeasonChange}
              />
            </div>

            <div>
              <label htmlFor="spring">Primavera</label>
              <input
                type="checkbox"
                name="season"
                id="spring"
                checked={formData.season.includes("spring")}
                onChange={handleSeasonChange}
              />

              <label htmlFor="autumn">Otoño</label>
              <input
                type="checkbox"
                name="season"
                id="autumn"
                checked={formData.season.includes("autumn")}
                onChange={handleSeasonChange}
              />
              {errors.season && <p className={styles.error}>{errors.season}</p>}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.selectCountries}>
            <MultiSelect />
            <div>
              <label htmlFor="countries" className={styles.labelsection}>
                Países seleccionados:
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
          </div>
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
