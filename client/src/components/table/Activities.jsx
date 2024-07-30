import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { retrieveActivities, deleteActivity } from "../../redux/actions";

import Pagination from "../pagination/Pagination";
import PropTypes from "prop-types";
import { FaPencil, FaEraser } from "react-icons/fa6";
import styles from "./tablas.module.css";

function Activity({ onClose }) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activity);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleEdit = (id) => {
    console.log("Edit item at index:", id);
    window.alert("Esta funcionalidad esta en construcción");
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "¿Está seguro que desea eliminar este registro? La acción no se puede deshacer."
      )
    ) {
      dispatch(deleteActivity(id)).then(() => {
        dispatch(retrieveActivities());
      });
    }
    window.alert("El registro ha sido borrado");
  };

  useEffect(() => {
    dispatch(retrieveActivities());
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = activities.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  let content;
  if (activities.length > 0) {
    content = (
      <tbody>
        {currentRecords.map((act) => (
          <tr key={act.id}>
            <td>{act.name}</td>
            <td>{act.duration}</td>
            <td>{act.duration}</td>
            <td>{act.season}</td>
            <td className={styles.actions}>
              <button onClick={() => handleEdit(act.id)}>
                <FaPencil className={styles.icon_mobile} />
              </button>

              <button onClick={() => handleDelete(act.id)}>
                <FaEraser className={styles.icon_mobile} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    content = (
      <tbody>
        <tr key="256">
          <td colSpan="5">No hay actividades registradas</td>
        </tr>
      </tbody>
    );
  }

  return (
    <div className={styles.container__Acttable}>
      <h2 className={styles.container__title}>Actividades Registradas</h2>
      <button className={styles.container__btn__close} onClick={onClose}>
        X
      </button>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(activities.length / recordsPerPage)}
        onPageChange={setCurrentPage}
      />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Actividad</th>
              <th scope="col">Duración</th>
              <th scope="col">Dificultad</th>
              <th scope="col">Temporada</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </div>
  );
}
Activity.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Activity;
