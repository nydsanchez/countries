import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by SC - CountryExplorer
      </p>
    </footer>
  );
}

export default Footer;
