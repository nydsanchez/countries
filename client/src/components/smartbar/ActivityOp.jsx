import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Smart.module.css";
import Band from "../smartbar/Band";
import Btn from "../button/Buttons";

function ActivityOp({
  onNewClick,
  onViewClick,
  isViewDisabled,
  isNewDisabled,
}) {
  const location = useLocation();
  let title = location.pathname.substring(1).toUpperCase();

  return (
    <div className={styles.band}>
      <Band>{title}</Band>

      <div className={styles.crud}>
        <Btn onClick={onNewClick} disabled={isNewDisabled}>
          {" "}
          ✚ Nueva actividad{" "}
        </Btn>
        <Btn onClick={onViewClick} disabled={isViewDisabled}>
          👁️ Ver actividades{" "}
        </Btn>
      </div>
    </div>
  );
}

ActivityOp.propTypes = {
  onNewClick: PropTypes.func.isRequired,
  onViewClick: PropTypes.func.isRequired,
  isNewDisabled: PropTypes.func.isRequired,
  isViewDisabled: PropTypes.func.isRequired,
};
export default ActivityOp;
