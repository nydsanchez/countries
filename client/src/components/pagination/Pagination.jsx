import PropTypes from "prop-types";
import styles from "./pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <span
              onClick={() => onPageChange(number)}
              className={`page-link${currentPage === number ? "active" : ""}`}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
