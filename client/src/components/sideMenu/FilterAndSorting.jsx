import styles from "./filterandsorting.module.css";
function FilterAndSorting({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.closeButton}>
        <button onClick={onClose}>X</button>
      </div>
      <main className={styles.filter_box}>
        <h2 className={styles.filter_box__title}>Filtrar y Ordenar</h2>
      </main>
      <footer className={styles.filter_footer}>
        <button className={`${styles.footer_btn} ${styles.footer_btn__sec}`}>
          Restablecer todo
        </button>
        <button className={`${styles.footer_btn} ${styles.footer_btn__main}`}>
          Filtro
        </button>
      </footer>
    </div>
  );
}

export default FilterAndSorting;
