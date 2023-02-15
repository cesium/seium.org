const Pagination = ({
  visitorsPerPage,
  totalVisitors,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVisitors / visitorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex flex-row justify-center">
        {currentPage !== 1 && (
          <li className="page-item mr-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
            >
              <i className="fas fa-chevron-left">Prev</i>
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item mr-1 ${
              currentPage === number ? "active text-quinary" : ""
            }`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li className="page-item mr-1">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
            >
              <i className="fas fa-chevron-right">Next</i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
