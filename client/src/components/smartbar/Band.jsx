import propTypes from "prop-types";
import styles from "./Smart.module.css";

function Band({ children }) {
  return (
    <div className={styles.band}>
      <h1>{children}</h1>
    </div>
  );
}
Band.propTypes = {
  children: propTypes.node.isRequired,
};
export default Band;
