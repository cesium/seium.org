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
      <ul className="pagination flex flex-row">
        {currentPage !== 1 && (
          <li className="page-item mr-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
            >
              Prev
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
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
