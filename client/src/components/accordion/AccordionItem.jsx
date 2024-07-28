import PropTypes from "prop-types";
import styles from "./accordion.module.css";

function AccordionItem({ content, id }) {
  return (
    <ul className={styles.content_box_item}>
      {console.log(typeof content)}
      <li key={id}>{content}</li>
    </ul>
  );
}

AccordionItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default AccordionItem;
