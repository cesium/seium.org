import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ badgesPerPage, totalBadges, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBadges / badgesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-row justify-center">
        {totalBadges !== 0 && currentPage !== 1 && (
          <li className="page-item mr-1">
            <button onClick={() => paginate(currentPage - 1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </li>
        )}
        {totalBadges !== 0 && currentPage !== pageNumbers.length && (
          <li className="mx-1">
            <button onClick={() => paginate(currentPage + 1)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
