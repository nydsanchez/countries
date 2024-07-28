import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { retrieveCountries } from "../../redux/actions";

import Pagination from "../pagination/Pagination";
import CountryItem from "../countryitem/CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.country.countries);
  const searchCountries = useSelector((state) => state.search);
  const filterCountries = useSelector((state) => state.filteredCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  let data = [];

  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);

  if (searchCountries.length > 0 && filterCountries.length === 0) {
    data = searchCountries;
  }

  if (filterCountries.length > 0) {
    data = filterCountries;
  }
  if (filterCountries.length === 0 && searchCountries.length === 0) {
    data = countries;
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / recordsPerPage)}
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
