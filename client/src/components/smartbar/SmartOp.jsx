import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearData } from "../../redux/actions";
import Band from "./Band";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import Filters from "./Filters";
import styles from "./Smart.module.css";
import Btn from "../button/Buttons";

function SmartOp() {
  const location = useLocation();
  const dispatch = useDispatch();
  let title = location.pathname.substring(1).toUpperCase();

  const handleOnClick = () => {
    dispatch(clearData());
  };

  return (
    <div className={styles.band}>
      <Band>{title}</Band>

      <div className={styles.options}>
        <Search />
        <Filters />
        <Btn onClick={handleOnClick}>Quitar filtros</Btn>
        <Sort />
      </div>
    </div>
  );
}

export default SmartOp;
