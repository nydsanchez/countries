import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilter,
  resetFilter,
  retrieveActivities,
} from "../../redux/actions";
import { BsChevronUp } from "react-icons/bs";
import styles from "./modalPrueba.module.css";

function ModalActivity({ onClose }) {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activity);
  const selectedActivities = useSelector((state) => state.filters.activity);

  useEffect(() => {
    dispatch(retrieveActivities());
  }, [dispatch]);

  const handleActivityChange = (e) => {
    const actId = Number(e.target.value);

    selectedActivities.includes(actId)
      ? dispatch(resetFilter("activity", actId))
      : dispatch(applyFilter("activity", actId));
  };

  return (
    <div className={styles.modalOverlay}>
      <button className={styles.closeButton} onClick={onClose}>
        <BsChevronUp className={styles.img_filter} />
      </button>

      <div className={styles.modal}>
        <ul className={styles.list}>
          {activities.map((activity, index) => (
            <li key={index}>
              <div className={styles.list_item}>
                <div>
                  <input
                    type="checkbox"
                    id={activity.id}
                    name="activity"
                    value={activity.id}
                    onChange={handleActivityChange}
                    checked={selectedActivities.includes(activity.id)}
                    className={styles.input__filter}
                  />
                  <label htmlFor={activity.id} className={styles.label__filter}>
                    {activity.name}
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ModalActivity.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ModalActivity;
