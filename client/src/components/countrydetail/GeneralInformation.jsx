import { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

import styles from "./CountryDetailComponent.module.css";
import ModalGralInfo from "../modalWindow/modalGralInfo";

function GeneralInformation() {
  const [isOpen, setIsOpen] = useState();

  const handleToggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.bottomContainer} onClick={handleToggleFilter}>
        <h2> Informacion General</h2>
        <BsArrowUpRightCircle className={styles.ico} />
      </button>
      {isOpen && (
        <div>
          <ModalGralInfo onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
}

export default GeneralInformation;
