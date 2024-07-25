import PropTypes from "prop-types";
import styles from "../../styles/CountryDetail.module.css";
import Accordion from "../accordion/Accordion";

function TouristActivities({ country }) {
  const activities = country.activities || []; // Suponiendo que 'activities' es un array de objetos { title, description }

  const accordionItems = activities.map((activity) => ({
    title: activity.title,
    content: <p>{activity.description}</p>, // Puedes personalizar el contenido según tus necesidades
  }));

  return (
    <main className={styles.actCountries}>
      <section>
        <h2>{country.name}</h2>
        <Accordion items={accordionItems} />
      </section>
    </main>
  );
}

TouristActivities.propTypes = {
  country: PropTypes.object.isRequired,
};

export default TouristActivities;
