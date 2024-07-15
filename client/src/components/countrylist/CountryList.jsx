import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { retrieveCountries } from "../../redux/actions";

import Pagination from "../pagination/Pagination";
import CountryItem from "../countryitem/CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(countries.length / recordsPerPage)}
        onPageChange={setCurrentPage}
      />
      <ul className={styles.countryList}>
        {currentRecords.map((country, index) => (
          <CountryItem country={country} key={index} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
