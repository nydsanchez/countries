/*import { useState } from "react";

import PageNav from "../components/navpage/NavPage";
import OptAct from "../components/SmartBar/OptAct";
import ActivityForm from "../components/form/ActivityForm";
import Activity from "../components/tabla/Activities";

import styles from "../styles/Homepage.module.css";
function Activitypage() {
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [isViewDisabled, setIsViewDisabled] = useState(false);
  const [isNewDisabled, setIsNewDisabled] = useState(false);

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
      <PageNav />
      <OptAct
        onNewClick={handleShowForm}
        onViewClick={handleShowTable}
        isViewDisabled={isViewDisabled}
        isNewDisabled={isNewDisabled}
      />
      {showForm && <ActivityForm onClose={handleCloseForm} />}
      {showTable && <Activity onClose={handleCloseTable} />}
    </div>
  );
}

export default Activitypage;
*/
