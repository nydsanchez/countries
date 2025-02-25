import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../redux/actions";
import { useEffect } from "react";
import NavPage from "../components/navpage/NavPage";
import OptAct from "../components/smartbar/ActivityOp";
import ActivityForm from "../components/form/ActivityForm";
import Activity from "../components/table/Activities";

import styles from "../styles/Activities.module.css";

function Activitypage() {
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [isViewDisabled, setIsViewDisabled] = useState(false);
  const [isNewDisabled, setIsNewDisabled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);

  const handleShowForm = () => {
    setShowForm(true);
    setIsViewDisabled(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setIsViewDisabled(false);
  };

  const handleShowTable = () => {
    setShowTable(true);
    setIsNewDisabled(true);
  };
  const handleCloseTable = () => {
    setShowTable(false);
    setIsNewDisabled(false);
  };
  return (
    <div className={styles.homepage}>
      <header>
        <NavPage />
        <OptAct
          onNewClick={handleShowForm}
          onViewClick={handleShowTable}
          isViewDisabled={isViewDisabled}
          isNewDisabled={isNewDisabled}
        />
        {showForm && <ActivityForm onClose={handleCloseForm} />}
        {showTable && <Activity onClose={handleCloseTable} />}
      </header>
    </div>
  );
}

export default Activitypage;
