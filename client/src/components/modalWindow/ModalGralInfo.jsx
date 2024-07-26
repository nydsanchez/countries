import { useSelector } from "react-redux";

import { FaCompassDrafting, FaPeopleGroup } from "react-icons/fa6";
import styles from "./modal.module.css";

function ModalGralInfo({ onClose }) {
  const detailCountry = useSelector((state) => state.country.regcountry);

  return (
    <div className={styles.modalOverlay}>
      <div>
        <button className={styles.closeButton__info} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.modal_gral_info}>
        <p>
          Subregion: <span>{detailCountry.subregion} </span>
        </p>
        <p>
          Continente: <span>{detailCountry.continent} </span>
        </p>
        <p>
          Capital: <span>{detailCountry.capital} </span>
        </p>
        <div className={styles.stats}>
          <div>
            <p>Población</p>
            <div className={styles.stats_data}>
              <FaPeopleGroup className={styles.stats_img__group} />
              <span>{detailCountry.population} </span>
            </div>
          </div>

          <div>
            <p>Area </p>
            <div className={styles.stats_data}>
              <FaCompassDrafting className={styles.stats_img__area} />
              <span> {detailCountry.area} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalGralInfo;
