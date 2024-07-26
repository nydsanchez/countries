import styles from "./accordion.module.css";

function AccordionItem({ content, id }) {
  return (
    <ul className={styles.content_box_item}>
      {console.log(content)}
      <li key={id}>{content}</li>
    </ul>
  );
}

export default AccordionItem;
