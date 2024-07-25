export default function Formvalidation(formData) {
  const errors = {};

  // activity name
  if (!formData.name) {
    errors.name = "Name is required";
  }
  if (formData.name.length < 4) {
    errors.name = "The activity name must be at least 4 characters long";
  }

  // Validar dificultad
  if (
    !formData.difficulty ||
    formData.difficulty < 1 ||
    formData.difficulty > 5
  ) {
    errors.difficulty = "Difficulty must be between 1 and 5";
  }

  // Validar duración
  if (
    !formData.duration ||
    isNaN(formData.duration) ||
    formData.duration <= 0
  ) {
    errors.duration = "Duration must be a positive number";
  }

  // Validar temporada
  if (formData.season.length === 0) {
    errors.season = "At least one season must be selected";
  }

  // Validar países
  if (formData.countries.length === 0) {
    errors.countries = "At least one country must be selected";
  }

  return errors;
}
