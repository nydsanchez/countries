import { useState } from "react";
import styles from "./Prueba.module.css";
import Btn from "../button/Buttons";
import ModalContinent from "../modalWindow/modalContinent";
import ModalActivity from "../modalWindow/modalActivity";

function Filters() {
  const [isContinentModalVisible, setIsContinentModalVisible] = useState(false);
  const [isActivityModalVisible, setIsActivityModalVisible] = useState(false);

  const openContinentModal = () => {
    setIsContinentModalVisible(!isContinentModalVisible);
  };
  const closeContinentModal = () => {
    setIsContinentModalVisible(false);
  };
  const openActivityModal = () => {
    setIsActivityModalVisible(!isContinentModalVisible);
  };
  const closeActivityModal = () => {
    setIsActivityModalVisible(false);
  };

  return (
    <div className={styles.prueba}>
      <Btn
        className={styles.boxButton}
        type="button"
        onClick={openContinentModal}
      >
        Filtrar por continente
      </Btn>

      <Btn
        className={styles.boxButton}
        type="button"
        onClick={openActivityModal}
      >
        Filtrar por actividad
      </Btn>

      {isContinentModalVisible && (
        <div className={styles.countryListContainer}>
          <ModalContinent onClose={closeContinentModal} />
        </div>
      )}
      {isActivityModalVisible && (
        <div className={styles.countryListContainer}>
          <ModalActivity onClose={closeActivityModal} />
        </div>
      )}
    </div>
  );
}

export default Filters;
